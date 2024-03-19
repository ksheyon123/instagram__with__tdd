import { accessTokenAtom } from "@/states/atom";
import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Callback: React.FC = () => {
  const router = useRouter();
  const setAccessToken = useSetAtom(accessTokenAtom);

  useEffect(() => {
    const url = window.location.href;
    const qs = url.split("#")[1];
    const queries = qs.split("&");
    let obj: any = new Object();
    const d = queries.map((el) => {
      const key = el.split("=")[0];
      const value = el.split("=")[1];
      obj = {
        ...obj,
        [key]: value,
      };
    });
    const { access_token = "", state = "" } = obj;
    setAccessToken(access_token);
    router.replace("/signin");
  }, []);
  return <></>;
};
