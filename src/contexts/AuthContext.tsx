// import { getAccessToken } from "@/apis/api";
import { PATHNAME } from "@/constants";
import { ChildrenProps } from "@/types/types";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: ChildrenProps) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    console.log("Before Mounted");
    setIsMounted(true);
  }, [router.pathname]);

  useEffect(() => {
    if (isMounted) {
      console.log("After Mounted");
    }
  }, [isMounted]);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
