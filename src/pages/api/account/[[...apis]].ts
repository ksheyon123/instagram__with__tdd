import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { insta_ac } = req.query;
    console.log();
    const accessToken = insta_ac;
    // const accessToken = global.data[userId as string];

    const resp0 = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          accept: "application/json",
        },
      }
    );
    const resp1 = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${accessToken}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          accept: "application/json",
        },
      }
    );

    const d0 = await resp0.json();
    const { data } = await resp1.json();

    res.status(200).json({ ...d0, contents: data } as any);
  } catch (e) {
    console.error("Error", JSON.stringify(e));
    res.status(500).json(e);
  }
}
