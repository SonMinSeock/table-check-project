import { atom } from "recoil";

export const dateAtom = atom({
  key: "date",
  default: { firstDate: null, secondDate: null, thirdDate: null },
});
