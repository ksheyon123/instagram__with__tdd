import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { code } = req.body;
  console.log(global?.data, code);

  const formData = new URLSearchParams();
  formData.append("grant_type", "authorization_code");
  formData.append("client_id", process.env.INSTAGRAM_CLIENT_ID);
  formData.append("client_secret", process.env.INSTAGRAM_CLIENT_SECRET);
  formData.append("code", code);
  formData.append(
    "redirect_uri",
    "https://e462-183-99-76-67.ngrok-free.app/login/callback"
  );

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
  (req.cookies as any).set("access_token", access_token);
  res.status(200).json({ userId: user_id } as any);
}
