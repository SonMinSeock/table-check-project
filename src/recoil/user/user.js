import { atom } from "recoil";

export const userAtom = atom({
  key: "user",
  default: null,
});

export const userIdAtom = atom({
  key: "userId",
  default: null,
});
