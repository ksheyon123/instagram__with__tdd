import { PATHNAME } from "@/constants";
import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";
// const ENDPOINT = process.env.NGROK_ENDPOINT;
const qs = () => {
  const url = window.location.href;
  console.log(url);
  const qs = url.split("#")[1];
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
  const { access_token = "" } = obj;
  return access_token;
};

const Callback: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const access_token = qs();
    console.log(access_token);
    if (!!access_token) {
      window.localStorage.setItem("fbac", access_token);
    }
    router.replace(PATHNAME.SIGN_IN);
  }, []);
  return <div></div>;
};

export default Callback;
