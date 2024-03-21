import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { code } = req.body;

  const formData = new URLSearchParams();
  formData.append("grant_type", "authorization_code");
  formData.append("client_id", process.env.INSTAGRAM_CLIENT_ID);
  formData.append("client_secret", process.env.INSTAGRAM_CLIENT_SECRET);
  formData.append("code", code);
  formData.append(
    "redirect_uri",
    "https://e462-183-99-76-67.ngrok-free.app/login/callback"
  );

  console.log(
    code,
    process.env.INSTAGRAM_CLIENT_ID,
    process.env.INSTAGRAM_CLIENT_SECRET
  );
  const resp = await fetch("https://api.instagram.com/oauth/access_token", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      accept: "application/json",
    },
    body: formData,
  });
  // const resp = await fetch("https://api.instagram.com/oauth/access_token", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     client_id: process.env.INSTAGRAM_CLIENT_ID,
  //     client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
  //     grant_type: "authorization_code",
  //     redirect_uri: "https://e462-183-99-76-67.ngrok-free.app/login/callback",
  //     code: code,
  //   }),
  // });

  const result = await resp.json();
  res.status(200).json({ ...result });
}
