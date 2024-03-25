import type { NextApiRequest, NextApiResponse } from "next";
import { main } from "@/utils/openai";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const d = await main();
  res.status(200).json({ data: d } as any);
}
