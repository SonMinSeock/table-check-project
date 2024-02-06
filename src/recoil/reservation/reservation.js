import { atom } from "recoil";

export const reservationAtom = atom({
  key: "reservation",
  default: null,
});

export const reservationsAtom = atom({
  key: "reservations",
  default: [],
});
