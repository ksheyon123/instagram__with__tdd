import { get, post } from "./https";

const PATH = {
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
