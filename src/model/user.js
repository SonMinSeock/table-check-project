import { collection, query, getDocs, addDoc, updateDoc, doc, where } from "firebase/firestore";
import { fireStore } from "../database/config";
import { reservationNumber } from "../util/reservation-number";

function getReservationNumber(reservations) {
  const reservationsLength = reservations.length;

  if (reservationsLength === 0) {
    return reservationNumber[reservationsLength];
  } else if (reservationsLength === 1) {
    return reservationNumber[1];
  } else if (reservationsLength === 2) {
    return reservationNumber[2];
  } else if (reservationsLength === 3) {
    return reservationNumber[3];
  } else if (reservationsLength === 4) {
    return reservationNumber[4];
  } else {
    return reservationNumber[5];
  }
}

export async function accountUser(inputData) {
  const q = query(collection(fireStore, "users"));

  const users = await getDocs(q);

  let isUser = false;
  let userId;

  users.forEach((doc) => {
    const user = doc.data();
    if (user.phoneNumber === inputData.phoneNumber && user.username === inputData.username) {
      isUser = true;
      userId = doc.id;
    }
  });

  if (!isUser) {
    const resultUserDoc = await addDoc(collection(fireStore, "users"), {
      username: inputData.username,
      phoneNumber: inputData.phoneNumber,
      createdAt: new Date().toLocaleString(),
      reservationIdList: [],
    });

    const resultReservationDoc = await addDoc(collection(fireStore, "reservations"), {
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
      responseDateTime: "",
      checkDateTime: "",
      reservationNumber: reservationNumber[0],
      pay: "무료",
      createdAt: Date.now(),
      // isPay: false,
    });

    const userRef = doc(fireStore, "users", resultUserDoc.id);

    await updateDoc(userRef, {
      reservationIdList: [resultReservationDoc.id],
    });

    userId = resultUserDoc.id;
  } else {
    const userRef = doc(fireStore, "users", userId);
    const reservationQuery = query(collection(fireStore, "reservations"), where("userId", "==", userId));

    const reservations = (await getDocs(reservationQuery)).docs.map((doc) => ({ ...doc.data() }));

    const resultReservationDoc = await addDoc(collection(fireStore, "reservations"), {
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
      // isPay: false,
    });

    const user = await readUser(userId);

    await updateDoc(userRef, {
      reservationIdList: [...user.reservationIdList, resultReservationDoc.id],
    });
  }

  return userId;
}

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
