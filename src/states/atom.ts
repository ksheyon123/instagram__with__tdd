import { atom } from "recoil";

export const jwtState = atom({
  key: "jwtStateAtom",
  default: "",
});
