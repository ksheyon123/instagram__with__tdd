import { getAccessToken } from "@/apis/api";
import { PATHNAME } from "@/constants";
import { jwtAtom } from "@/states/atom";
import { ChildrenProps } from "@/types/types";
import { useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: ChildrenProps) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const setJwt = useSetAtom(jwtAtom);

  useEffect(() => {
    console.log("Before Mounted");
    // setIsMounted(true);
    getJwt();
  }, [router.pathname]);

  useEffect(() => {
    if (isMounted) {
      console.log("After Mounted");
    }
  }, [isMounted]);

  const getJwt = async () => {
    const params = window.location.search;
    const code = new URLSearchParams(params).get("code");
    // if (code) {
    // const data = await getAccessToken(code);
    // console.log(data);
    // router.push(PATHNAME.LOGGED_IN);
    // setJwt(data);
    setIsMounted(true);
    // }
  };
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
