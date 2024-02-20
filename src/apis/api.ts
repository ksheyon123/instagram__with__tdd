import { get, post } from "./https";

const PATH = {
  FB: "/v1/fbid",
  FB_LOGIN: "https://www.facebook.com/v19.0/dialog/oauth",
  FETCH1: "",
};

const bypass = async () => {
  const data = await get(PATH.FB, {
    client_id: "1367563664130376",
    redirect_uri: "http://localhost:3000",
    state: "1234",
  });
  console.log(data);
  return data;
};

const loginFB = async () => {
  const data = await get(PATH.FB_LOGIN, {
    client_id: "1367563664130376",
    redirect_uri: "http://localhost:3000",
    state: "1234",
  });
  console.log(data);
  return data;
};

const sampleGET = async (params: any) => {
  const data = await get(PATH.FETCH1, params);
  return data;
};

const samplePOST = async (params: any) => {
  const data = await post(PATH.FETCH1, params);
  return data;
};

export { bypass, loginFB, sampleGET, samplePOST };
