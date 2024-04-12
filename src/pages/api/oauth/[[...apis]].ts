import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { code } = req.body;

    const formData = new URLSearchParams();
    formData.append("grant_type", "authorization_code");
    formData.append("client_id", process.env.INSTAGRAM_CLIENT_ID);
    formData.append("client_secret", process.env.INSTAGRAM_CLIENT_SECRET);
    formData.append("code", code);
    formData.append("redirect_uri", "/login/callback");

    //https://graph.instagram.com/v19.0/me
    const resp = await fetch("https://api.instagram.com/oauth/access_token", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        accept: "application/json",
      },
      body: formData,
    });

    const { access_token, user_id } = await resp.json();
    res.status(200).json({ userId: user_id, accessToken: access_token } as any);
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
}
