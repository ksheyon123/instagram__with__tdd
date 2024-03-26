import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const fbAccessToken = "";
    // Test Content ID : "18014984534190753"
    const resp2 = await fetch(
      `https://graph.facebook.com/v19.0/18014984534190753/comments?access_token=${fbAccessToken}`
    );
    const resp3 = await fetch(
      `https://graph.facebook.com/v19.0/18014984534190753/comments?message=H1&access_token=${fbAccessToken}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          accept: "application/json",
        },
      }
    );

    res.status(200).json({} as any);
  } catch (e) {
    console.error("Error", JSON.stringify(e));
    res.status(500).json(e);
  }
}
