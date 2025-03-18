import { get, post } from "./https";

export const ENDPOINT = {
  FB_ID: "/me",
  ACCOUNT_INFO: "/me/accounts",
  GET_ACCESS_TOKEN: "/oauth/access_token",
};

const facebook = "/facebook";
const api = "/api";

// const getFBProfile = async () => {
//   try {
//     const fbac = localStorage.getItem("fbac");
//     if (!fbac) {
//       throw JSON.stringify({ code: 404, message: "No facebook access_token" });
//     }
//     const rsp = await get(`${api}${facebook}${ENDPOINT.FB_ID}`, {
//       access_token: fbac,
//       fields: "id",
//     });
//     console.log(rsp);
//     return rsp;
//   } catch (e) {
//     throw e;
//   }
// };

const verifyAccessToken = async (inspectToken: string) => {
  // App Access Token: 949308743408411|mg2FgTjRS90NZWAItW0p85yyI1g
  const appAccessToken = "949308743408411|mg2FgTjRS90NZWAItW0p85yyI1g";
  const rsp = await get(`https://graph.facebook.com/debug_token`, {
    input_token: inspectToken,
    access_token: appAccessToken,
  });
  console.log(rsp);
};

const getAppAccessToken = async () => {
  const rsp = await get(`https://graph.facebook.com/oauth/access_token`, {
    client_id: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
    grant_type: "client_credentials",
  });
  return rsp;
};

const getUserProfile = async () => {
  try {
    const fbac = localStorage.getItem("fbac");
    if (!fbac) {
      throw JSON.stringify({ code: 404, message: "No facebook access_token" });
    }
    const rsp = await get(`https://graph.facebook.com/v19.0${ENDPOINT.FB_ID}`, {
      access_token: fbac,
    });
    const { data } = await rsp;
    return data;
  } catch (e) {
    throw e;
  }
};

const getFBProfile = async () => {
  try {
    const fbac = localStorage.getItem("fbac");
    console.log(fbac);
    if (!fbac) {
      throw JSON.stringify({ code: 404, message: "No facebook access_token" });
    }
    const rsp = await get(`${api}${facebook}${ENDPOINT.ACCOUNT_INFO}`, {
      access_token: fbac,
      fields: "id, name, email",
    });
    const { data } = rsp;
    console.log("RSP", rsp);
    return data;
  } catch (e) {
    throw e;
  }
};

const getIGProfilesByPageId = async (fb_page_id: string) => {
  try {
    const fbac = localStorage.getItem("fbac");
    const rsp = await get(
      `${api}${facebook}${ENDPOINT.ACCOUNT_INFO}/${fb_page_id}`,
      {
        fields: "instagram_business_account, name, profile_image",
        access_token: fbac,
      }
    );
    const { data } = rsp;
    console.log(data);
    return data;
  } catch (e) {
    throw e;
  }
};

const getIGProfile = async (ig_id) => {
  try {
    const fbac = localStorage.getItem("fbac");
    const rsp = await get(`${api}${facebook}/${ig_id}`, {
      fields: "id, username, profile_picture_url",
      access_token: fbac,
    });
    console.log(rsp);
    return rsp;
  } catch (e) {
    throw e;
  }
};

export {
  verifyAccessToken,
  getAppAccessToken,
  getUserProfile,
  getFBProfile,
  getIGProfilesByPageId,
  getIGProfile,
};
