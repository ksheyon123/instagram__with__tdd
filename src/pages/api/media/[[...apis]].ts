import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

const getMedia = async (mediaId, accessToken) => {
  const resp = await fetch(
    `https://graph.facebook.com/v19.0/${mediaId}?fields=comments_count,like_count&access_token=${accessToken}`
  );
  return await resp.json();
};

const getComments = async (mediaId, accessToken) => {
  const resp = await fetch(
    `https://graph.facebook.com/v19.0/${mediaId}/comments?access_token=${accessToken}`
  );
  return await resp.json();
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const { media_id, access_token } = req.query;
    const fbAccessToken = access_token;
    // Test Content ID : "18014984534190753"
    const [media, comments] = await Promise.all([
      getMedia(media_id, fbAccessToken),
      getComments(media_id, fbAccessToken),
    ]);

    const replies = comments.data;

    const data = {
      ...media,
      replies: replies,
    };
    console.log(data);
    res.status(200).json({ ...data } as any);
  } catch (e) {
    console.error("Error", JSON.stringify(e));
    res.status(500).json(e);
  }
}
