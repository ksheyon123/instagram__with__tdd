// import { getAccessToken } from "@/apis/api";
import { PATHNAME } from "@/constants";
import { ChildrenProps } from "@/types/types";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

type AuthContext = {
  a: string;
  isMounted: boolean;
};

export const AuthContext = createContext<AuthContext>({
  a: "",
  isMounted: false,
});

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
  return (
    <AuthContext.Provider value={{ a: "", isMounted }}>
      {children}
    </AuthContext.Provider>
  );
};
