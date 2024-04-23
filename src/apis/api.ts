import { get, post } from "./https";

export const ENDPOINT = {
  ACCOUNT_INFO: "/me/accounts",
  GET_ACCESS_TOKEN: "/oauth/access_token",
};

const _version = "v1";

const FB_PREFIX = "graph";
const INSTA_PREFIX = "instagram";
const FB_PATHNAME = "facebook.com";
const FB_API_VERSION = "v19.0";

const getFBProfile = async () => {
  try {
    const fbac = localStorage.getItem("fbac");
    if (!fbac) {
      throw JSON.stringify({ code: 404, message: "No facebook access_token" });
    }
    const rsp = await get(`${ENDPOINT.ACCOUNT_INFO}`, {
      access_token: fbac,
    });
    return rsp;
  } catch (e) {
    throw e;
  }
};

const getIGProfilesByFB = async (fb_id: string) => {
  const fbac = localStorage.getItem("fbac");
  const rsp = await get(`${ENDPOINT.ACCOUNT_INFO}/${fb_id}`, {
    fields: "instagram_business_account",
    access_token: fbac,
  });
};

export { getFBProfile, getIGProfilesByFB };
