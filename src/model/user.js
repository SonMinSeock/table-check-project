import { collection, query, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { fireStore } from "../database/config";

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
    console.log("유저 생성 결과 : ", resultUserDoc);

    const resultReservationDoc = await addDoc(collection(fireStore, "reservations"), {
      ...inputData.reservation,
      state: "예약 요청중",
      isCancleMessage: "", // 예약 불가 사유
      message: "",
      userId: resultUserDoc.id,
    });

    const userRef = doc(fireStore, "users", resultUserDoc.id);

    await updateDoc(userRef, {
      reservationIdList: [resultReservationDoc.id],
    });

    userId = resultUserDoc.id;

    console.log("예약 생성 결과 : ", resultReservationDoc);
  } else {
    const userRef = doc(fireStore, "users", userId);
    const resultReservationDoc = await addDoc(collection(fireStore, "reservations"), {
      ...inputData.reservation,
      state: "예약 요청중",
      isCancleMessage: "", // 예약 불가 사유
      message: "",
      userId: userId,
    });

    const user = await readUser(userId);

    await updateDoc(userRef, {
      reservationIdList: [...user.reservationIdList, resultReservationDoc.id],
    });
    console.log("예약 생성 결과 : ", resultReservationDoc);
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
