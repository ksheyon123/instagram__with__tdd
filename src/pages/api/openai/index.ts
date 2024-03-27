import type { NextApiRequest, NextApiResponse } from "next";
import { textGeneration, vision } from "@/utils/openai";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { data } = req.body;
  const txt = await textGeneration();
  console.log(txt);
  // console.log(url);
  // await vision("");
  // const resp = await fetch(
  //   "https://rhino-organic-bison.ngrok-free.app/_next/image?url=https%3A%2F%2Fscontent-ssn1-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F434224751_420929407129743_2607815568303248409_n.heic%3Fstp%3Ddst-jpg%26_nc_cat%3D104%26ccb%3D1-7%26_nc_sid%3D18de74%26_nc_ohc%3DwNliAHV3U2cAX8jbPCE%26_nc_ht%3Dscontent-ssn1-1.cdninstagram.com%26edm%3DANo9K5cEAAAA%26oh%3D00_AfBMtCB_ty6GqDEXIzGgXbynFVJYnudAIZ88mnlJu3wgXg%26oe%3D6608790B&w=1080&q=75",
  //   {
  //     method: "GET",
  //   }
  // );
  // const buffer = await resp.arrayBuffer();
  // const stringifiedBuffer = Buffer.from(buffer).toString("base64");
  // const contentType = resp.headers.get("content-type");
  // const imageBase64 = `data:${contentType};base64,${stringifiedBuffer}`;
  // await vision(imageBase64);
  res.status(200).json({ data: txt } as any);
}
