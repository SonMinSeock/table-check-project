import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { fireStore } from "../database/config";

export function readReservations(userId) {
  const q = query(collection(fireStore, "reservations"), where("userId", "==", userId));

  let reservations;

  onSnapshot(q, (snapshot) => {
    reservations = snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));
  });
}
