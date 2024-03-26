import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { media_id, access_token } = req.query;
    console.log(media_id);
    const fbAccessToken = access_token;
    // Test Content ID : "18014984534190753"
    const resp = await fetch(
      `https://graph.facebook.com/v19.0/${media_id}?fields=comments_count,like_count&access_token=${fbAccessToken}`
    );
    const d = await resp.json();
    console.log(d);
    res.status(200).json({ ...d } as any);
  } catch (e) {
    console.error("Error", JSON.stringify(e));
    res.status(500).json(e);
  }
}
