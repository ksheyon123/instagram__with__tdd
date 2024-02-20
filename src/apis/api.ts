import { get, post } from "./https";

const PATH = {
  LOGIN: "/fbid/login",
  ACCOUNT_INFO: "/me/accounts",
};

const _version = "v1";

const FB_PATH_OAUTH = "https://www.facebook.com/v19.0/dialog/oauth";
const FB_PREFIX = "graph";
const FB_PATHNAME = "facebook.com";
const FB_API_VERSION = "v19.0";

const getAccounts = async () => {
  // https://graph.facebook.com/v19.0/me/accounts?access_token={access-token}
  const data = await get(
    `https://${FB_PREFIX}.${FB_PATHNAME}/${FB_API_VERSION}${PATH.ACCOUNT_INFO}`,
    { access_token: 1234 }
  );
};

export { getAccounts };
