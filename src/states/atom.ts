import { atom } from "recoil";

export const jwtState = atom({
  key: "jwtAtom",
  default: "",
});
