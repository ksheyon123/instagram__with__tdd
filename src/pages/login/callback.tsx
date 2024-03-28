import { PATHNAME } from "@/constants";
import { staAccessCodeAtom } from "@/states/atom";
import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Callback: React.FC = () => {
  const router = useRouter();
  const setAccessCode = useSetAtom(staAccessCodeAtom);

  useEffect(() => {
    const url = window.location.href;
    const qs = url.split("?")[1];
    const queries = qs.split("&");
    let obj: any = new Object();
    queries.map((el) => {
      const key = el.split("=")[0];
      const value = el.split("=")[1];
      obj = {
        ...obj,
        [key]: value,
      };
    });
    const { code = "", state = "", accessToken = "" } = obj;
    if (code) {
      console.log("Code: ", code);
      const codeToAccessToken = async () => {
        const resp = await fetch("/api/oauth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code: code,
          }),
        });
        const { userId, accessToken } = await resp.json();
        console.log(userId);
        window.localStorage.setItem("instaac", accessToken);
        console.log("Access Token", accessToken);
        setAccessCode(accessToken);
        router.replace(PATHNAME.DASHBOARD);
      };
      codeToAccessToken();
    }
  }, []);
  return <div></div>;
};

export default Callback;
