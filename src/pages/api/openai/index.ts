import type { NextApiRequest, NextApiResponse } from "next";
import { main } from "@/utils/openai";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  main();
  res.status(200).json({ message: "Hello from Next.js!" });
}
