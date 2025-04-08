import { collection, query, getDocs, addDoc, updateDoc, doc, where } from "firebase/firestore";
import { fireStore } from "../database/config";
import { addReservation, getReservations } from "./reservation";
import { getReservationNumber, reservationNumber } from "../util/reservation-number";

// Firestore에서 해당 User 불러오기
export async function readUser(userId) {
  const q = query(collection(fireStore, "users"));

  const users = await getDocs(q);
  let user;

  users.forEach((doc) => {
    if (doc.id === userId) {
      user = doc.data();
    }
  });

  return user;
}

// accountUser 함수: 예약 생성시 Firestore의 User 불러와서 첫 유저인지 아닌지 확인 후 Reservation 생성한다.
export async function accountUser(inputData) {
  const q = query(collection(fireStore, "users"));

  const users = await getDocs(q);

  // 기존에 User가 생성했었는지 확인하는 코드
  let isUser = false;
  let userId;

  users.forEach((doc) => {
    const user = doc.data();
    if (user.phoneNumber === inputData.phoneNumber && user.username === inputData.username) {
      isUser = true;
      userId = doc.id;
    }
  });

  // 예약 안만든 첫 유저인 경우 User 생성(무료 예약), 이미 유저가 있을 경우 예약 생성(유료 예약)
  if (!isUser) {
    // Firestore의 User 문서 생성
    const userData = {
      username: inputData.username,
      phoneNumber: inputData.phoneNumber,
      createdAt: new Date().toLocaleString(), // ex) "2024.02.06"
      reservationIdList: [],
    };

    const resultUserDoc = await addDoc(collection(fireStore, "users"), userData);

    // Firestore의 Reservation 문서 생성
    const reservationData = {
      username: inputData.username,
      phoneNumber: inputData.phoneNumber,
      ...inputData.reservation,
      state: "예약 요청중",
      isCancleMessage: "", // 예약 불가 사유
      message: "",
      userId: resultUserDoc.id,
      requestDateTime: `${String(new Date().getMonth() + 1).padStart(2, "0")}월 ${String(new Date().getDate()).padStart(
        2,
        "0"
      )}일 | ${new Date().toTimeString().slice(0, 8)}`, // 예약 요청한 날짜, 시간
      responseDateTime: "", // 예약 확정 응답 시간
      cancleResponseDateTime: "", // 예약 불가능 응답 시간 또는 예약 자동 취소 응답 시간
      checkDateTime: "", // 예약 가능한 시간
      reservationNumber: reservationNumber[0],
      pay: "무료",
      createdAt: Date.now(),
      reservationUsernameJPN: "", // 예약자 일본어
      // isPay: false,
    };

    const resultReservationDoc = await addReservation(reservationData);
    const userRef = doc(fireStore, "users", resultUserDoc.id);

    // 예약 생성 후 생성한 예약 id를 해당 유저의 reservationIdList 필드 배열에 예약 id 값 추가
    await updateDoc(userRef, {
      reservationIdList: [resultReservationDoc.id],
    });

    userId = resultUserDoc.id;
  } else {
    const userRef = doc(fireStore, "users", userId);

    const reservations = await getReservations(userId);

    const reservationData = {
      username: inputData.username,
      phoneNumber: inputData.phoneNumber,
      ...inputData.reservation,
      state: "예약 요청중",
      isCancleMessage: "", // 예약 불가 사유
      message: "",
      userId: userId,
      requestDateTime: `${String(new Date().getMonth() + 1).padStart(2, "0")}월 ${String(new Date().getDate()).padStart(
        2,
        "0"
      )}일 | ${new Date().toTimeString().slice(0, 8)}`, // 예약 요청한 날짜, 시간
      responseDateTime: "",
      checkDateTime: "",
      reservationNumber: getReservationNumber(reservations),
      pay: "유료",
      createdAt: Date.now(),
      reservationUsernameJPN: "", // 예약자 일본어
      // isPay: false,
    };

    const resultReservationDoc = await addReservation(reservationData);

    const user = await readUser(userId);

    await updateDoc(userRef, {
      reservationIdList: [...user.reservationIdList, resultReservationDoc.id],
    });
  }

  return userId;
}
