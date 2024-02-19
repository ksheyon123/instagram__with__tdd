import { ChildrenProps } from "@/types/types";
import { createContext, useEffect, useRef, useState } from "react";

export const SDKContext = createContext({
  fb: {},
});

export const SDKContextProvider = ({ children }: ChildrenProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const fb = useRef();

  useEffect(() => {
    console.log("Before Mounted");
    setIsMounted(true);
    initFacebookSDK();
  }, []);

  useEffect(() => {
    if (isMounted) {
      console.log("After Mounted!");
    }
  }, [isMounted]);

  const initFacebookSDK = async () => {
    (window as any).FB.init({
      appId: "1367563664130376",
      xfbml: true,
      version: "v19.0",
    });
    fb.current = (window as any).FB;
  };

  return (
    <SDKContext.Provider
      value={{
        fb: fb.current,
      }}
    >
      {children}
    </SDKContext.Provider>
  );
};
