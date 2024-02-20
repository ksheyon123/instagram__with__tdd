import { get, post } from "./https";

const PATH = {
  FB: "/v1/fbid",
  FB_LOGIN: "https://www.facebook.com/v19.0/dialog/oauth",
  FETCH1: "",
};

const sampleGET = async (params: any) => {
  const data = await get(PATH.FETCH1, params);
  return data;
};

const samplePOST = async (params: any) => {
  const data = await post(PATH.FETCH1, params);
  return data;
};

export { sampleGET, samplePOST };
