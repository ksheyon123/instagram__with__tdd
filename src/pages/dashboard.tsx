import { ChildItem } from "@/components/Dashboard/ChildItem";
import { DBoardItem } from "@/components/Dashboard/DBoardItem";
import { MainItem } from "@/components/Dashboard/MainItem";
import { Accordion } from "@/components/common/Accordion";
import { Comments } from "@/components/common/Comments";
import { List } from "@/components/common/List";
import { InstagramContent, UserData } from "@/types/types";
import { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [instagramContents, setInstagramContents] = useState<
    InstagramContent[]
  >([
    {
      id: "1",
      media_url: "/1",
      media_type: "IMAGE",
      caption: "hi",
      comments_count: 0,
      like_count: 0,
      replies: [],
    },
  ]);
  const [userData, setUserData] = useState<UserData>({
    id: "1",
    follow_count: 0,
    followed_by_count: 0,
    has_profile_picture: false,
    is_private: false,
    is_published: false,
    media_count: 0,
    profile_pic: "",
    username: "kshyeon123",
  });
  // const fbac = window.localStorage.getItem("fbac");

  const getMedia = async (data) => {
    const fbac = window.localStorage.getItem("fbac");
    const { id } = data;
    const resp = await fetch(`/api/media?media_id=${id}&access_token=${fbac}`);
    const d = await resp.json();
    return {
      ...data,
      ...d,
    };
  };

  const getItems = async () => {
    // const fbac = window.localStorage.getItem("fbac");
    // const igac = window.localStorage.getItem("instaac");
    const fbac =
      "EAAT7Me1T73ABOZCUNeMoi6Kxa4bAeeG7hOH84aAkMbCEUOtc7ZB3xfjVZCWkmBiKGCE57ZCjOVIkjPfBJ2FZAL1FnBhNZCZBRti08flMcxqIcAMnoVBwVnnZA7MKS6rFevvUEfN3KOMV7CZBoXfThg11tciz34rpLdcUoB4eLWSZBx5JlrZBGOv4JiuRTVryX30ugEeUeXXQrLPZAAlo82ttZBgYUArlEQkkZD";
    const igac =
      "IGQWRNRy1icElNVHNqSWIwdGo2UmJ2d2JpVVlPVEd4RHRRaFZAtejVmSGtoSUlJMkVkWS1SVE5sTmhhVWg4NkhDbmY5Sm5wS1FONmVUT1gtbTRwR1VaLVQ4N0lwejIyTXRhcWJhY0s0LUJJeUx6elpoSXB1OW1VVmoyeTBJci02MWY1QQZDZD";
    const resp = await fetch(`/api/account?ig_ac=${igac}&fb_ac=${fbac}`);
    const data = await resp.json();
    console.log(data);
    const { contents } = data;
    if (contents) {
      const newArr = await Promise.all(
        (contents as any[]).map((el) => getMedia(el))
      );
      console.log(newArr);
      setInstagramContents(newArr);
    }
    setUserData((prev) => ({ ...prev, username: data.username, id: data.id }));
  };

  useEffect(() => {
    getItems();
  }, []);

  const getRepliesData = async (id: any) => {
    const { replies } = instagramContents.find((el) => el.id === id);
    const newArr = await Promise.all(replies.map((el) => getMedia(el)));
    console.log(newArr);
  };

  const like = async () => {
    const fbac = window.localStorage.getItem("fbac");
    const instaac = window.localStorage.getItem("instaac");

    await fetch(`/api/like?access_token=${fbac}&ig_ac=${instaac}`);
  };

  const gpt = async () => {
    //?url=https://rhino-organic-bison.ngrok-free.app/_next/image?url=https%3A%2F%2Fscontent-ssn1-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F434224751_420929407129743_2607815568303248409_n.heic%3Fstp%3Ddst-jpg%26_nc_cat%3D104%26ccb%3D1-7%26_nc_sid%3D18de74%26_nc_ohc%3DwNliAHV3U2cAX8jbPCE%26_nc_ht%3Dscontent-ssn1-1.cdninstagram.com%26edm%3DANo9K5cEAAAA%26oh%3D00_AfBMtCB_ty6GqDEXIzGgXbynFVJYnudAIZ88mnlJu3wgXg%26oe%3D6608790B&w=1080&q=75
    const resp = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const result = await resp.json();
  };

  return (
    <div className="flex flex-row w-full h-full justify-center">
      <div className="max-w-screen-sm">
        <div className="min-w-[470px]">
          <List
            items={instagramContents}
            child={(data: InstagramContent) => {
              return <DBoardItem userData={userData} {...data} />;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
