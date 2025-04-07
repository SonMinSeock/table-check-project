import { addDoc, collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { fireStore } from "../database/config";

// firestore의 reservation 문서 불러오기, onSnapshot 이용하여 실시간으로 문서를 불러온다.
export function readReservations(userId) {
  const q = query(collection(fireStore, "reservations"), where("userId", "==", userId));

  let reservations;

  onSnapshot(q, (snapshot) => {
    reservations = snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));
  });
}

// Firestore의 해당 유저 Reservation 불러오기
export async function getReservations(userId) {
  const reservationQuery = query(collection(fireStore, "reservations"), where("userId", "==", userId));

  const reservations = (await getDocs(reservationQuery)).docs.map((doc) => ({ ...doc.data() }));
  return reservations;
}

// Firestore의 Reservation 문서 생성하기
export async function addReservation(reservationData) {
  const reservationDoc = await addDoc(collection(fireStore, "reservations"), reservationData);
  return reservationDoc;
}
