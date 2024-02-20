import { get, post } from "./https";

const PATH = {
  LOGIN: "/fbid/login",
  ACCOUNT_INFO: "/me/accounts",
  GET_ACCESS_TOKEN: "/oauth/access_token",
};

const _version = "v1";

const FB_PATH_OAUTH = "https://www.facebook.com/v19.0/dialog/oauth";
const FB_PREFIX = "graph";
const FB_PATHNAME = "facebook.com";
const FB_API_VERSION = "v19.0";

const getAccessToken = async (access_token: string) => {
  console.log(process.env.FACEBOOK_CLIENT_SECRET);
  console.log(process.env.FACEBOOK_CLIENT_ID);
  //https://graph.facebook.com/v19.0/oauth/access_token?
  const data = await get(
    `https://${FB_PREFIX}.${FB_PATHNAME}/${FB_API_VERSION}${PATH.GET_ACCESS_TOKEN}`,
    {
      client_id: process.env.FACEBOOK_CLIENT_ID,
      client_secret: process.env.FACEBOOK_CLIENT_SECRET,
      redirect_uri: "http://localhost:3000/signin",
      code: access_token,
    }
  );
  console.log(data);
};
const getAccounts = async (key: string) => {
  // https://graph.facebook.com/v19.0/me/accounts?access_token={access-token}
  const data = await get(
    `https://${FB_PREFIX}.${FB_PATHNAME}/${FB_API_VERSION}${PATH.ACCOUNT_INFO}`,
    { access_token: key }
  );
  console.log(data);
};

export { getAccessToken, getAccounts };
