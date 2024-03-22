import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";
const ENDPOINT = process.env.NGROK_ENDPOINT;
const qs = () => {
  const url = window.location.href;
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
    console.log("FB", access_token);
    if (!!access_token) {
      const loginInsta = () => {
        const qs = new URLSearchParams({
          client_id: process.env.INSTAGRAM_CLIENT_ID,
          redirect_uri: `${ENDPOINT}/login/callback`,
          response_type: "code",
          scope: "user_profile,user_media",
        });
        // https://api.instagram.com/oauth/authorize
        router.replace(
          `https://api.instagram.com/oauth/authorize?${qs}`
          // "popup",
          // "popup=true"
        );
        // Next : https://developers.facebook.com/docs/instagram-basic-display-api/getting-started
      };
      loginInsta();
    }
  }, []);
  return <div></div>;
};

export default Callback;
