import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { ig_ac, fb_ac } = req.query;

    const resp0 = await fetch(
      `https://graph.instagram.com/me?fields=id,username,followers_count,follows_count,media_count,name,profile_picture_url&access_token=${ig_ac}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          accept: "application/json",
        },
      }
    );
    const d0 = await resp0.json();
    console.log(d0);
    const fb_id = "7199702623450166";
    const ig_id = "7314100441978717";
    const resp1 = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${ig_ac}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          accept: "application/json",
        },
      }
    );
    const { data } = await resp1.json();
    // const resp2 = await fetch(
    //   `https://graph.facebook.com/v19.0/${ig_id}?fields=profile_picture_url&access_token=${ig_ac}`
    // );
    const resp2 = await fetch(
      `https://graph.instagram.com/v19.0/${ig_id}?fields=profile_picture_url&access_token=${ig_ac}`
    );

    const d2 = await resp2.json();

    console.log(d2);
    res.status(200).json({ ...d0, contents: data } as any);
  } catch (e) {
    console.error("Error", JSON.stringify(e));
    res.status(500).json(e);
  }
}
