import { instaAuthCodeAtom } from "@/states/atom";
import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Callback: React.FC = () => {
  const router = useRouter();
  const setInstaAuthCode = useSetAtom(instaAuthCodeAtom);

  useEffect(() => {
    const url = window.location.href;
    const qs = url.split("?")[1];
    const queries = qs.split("&");
    let obj: any = new Object();
    console.log(queries);
    queries.map((el) => {
      const key = el.split("=")[0];
      const value = el.split("=")[1];
      obj = {
        ...obj,
        [key]: value,
      };
    });
    const { code = "", state = "" } = obj;
    setInstaAuthCode(code);
    router.replace("/login");
  }, []);
  return <div></div>;
};

export default Callback;
