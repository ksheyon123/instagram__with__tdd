import { jwtState } from "@/states/atom";
import { ChildrenProps } from "@/types/types";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: ChildrenProps) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const setJwt = useSetRecoilState(jwtState);

  useEffect(() => {
    console.log("Before Mounted");
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      console.log("After Mounted");
    }
  }, [isMounted]);

  const getJwt = () => {};
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
