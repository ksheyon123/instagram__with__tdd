import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const method = req.method;
    const query = req.query;
    const type = query.apis[0]; // facebook or instagram
    const path = query.apis.slice(1);
    const isString = typeof path === "string";
    const ep = isString ? path : path.join("/");

    let rsp;
    let data: any;
    switch (method) {
      case "GET":
        delete query["apis"]; // remove apis in the query
        const queryString = new URLSearchParams({
          ...(query as any),
          access_token: query.access_token,
        });
        console.log(`https://graph.${type}.com/${ep}?${queryString}`);
        rsp = await fetch(`https://graph.${type}.com/${ep}?${queryString}`, {
          method,
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            accept: "application/json",
          },
        });
        console.log(rsp);
        if (!rsp.ok) {
          throw new Error(
            JSON.stringify({ message: rsp.statusText, code: rsp.status })
          );
        } else {
          data = await rsp.json();
        }

        return res.status(200).json(data);
      // rsp = await fetch(`https://graph.${}`)
      case "POST":
        rsp = await fetch(`https://graph.${type}.com/${ep}?${queryString}`, {
          method,
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            accept: "application/json",
          },
        });
        console.log(rsp);
        if (!rsp.ok) {
          throw new Error(
            JSON.stringify({ message: rsp.statusText, code: rsp.status })
          );
        } else {
          data = await rsp.json();
        }
        return res.status(200).json(data);
    }
    // const rsp = await fetch();
  } catch (e) {
    console.error("Error", JSON.stringify(e));
    res.status(500).json(e);
  }
}
