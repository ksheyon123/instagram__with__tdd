import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { userId } = req.query;
  const accessToken = (req.cookies as any).get("access_token");
  // const accessToken = global.data[userId as string];

  console.log("accessToken", accessToken);
  const resp0 = await fetch(
    `https://graph.instagram.com/v19.0/me?fields=id,username&access_token=${accessToken}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        accept: "application/json",
      },
    }
  );
  const resp1 = await fetch(
    `https://graph.instagram.com/v19.0/me/media?fields=id,caption&access_token=${accessToken}`,
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

  const getMedia = async (id) => {
    const resp = await fetch(
      `https://graph.instagram.com/${id}?fields=id,media_type,media_url,username,timestamp&access_token=${accessToken}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          accept: "application/json",
        },
      }
    );
    return await resp.json();
  };

  const [d1] = await Promise.all(data.map((el: any) => getMedia(el.id)));

  console.log(d1);

  res.status(200).json({ ...d0 } as any);
}
