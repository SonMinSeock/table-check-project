import { addDoc, collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { fireStore } from "../database/config";

// firestore의 reservation 문서 불러오기
export function readReservations(userId) {
  const q = query(collection(fireStore, "reservations"), where("userId", "==", userId));

  let reservations;

  onSnapshot(q, (snapshot) => {
    reservations = snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));
  });
}

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
