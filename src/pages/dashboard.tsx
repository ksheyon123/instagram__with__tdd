import { ChildItem } from "@/components/Dashboard/ChildItem";
import { DBoardItem } from "@/components/Dashboard/DBoardItem";
import { MainItem } from "@/components/Dashboard/MainItem";
import { Accordion } from "@/components/common/Accordion";
import { Comments } from "@/components/common/Comments";
import { List } from "@/components/common/List";
import { InstagramContent } from "@/types/types";
import { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [instagramContents, setInstagramContents] = useState<
    InstagramContent[]
  >([]);
  const [userData, setUserData] = useState<any>();
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
    const fbac = window.localStorage.getItem("fbac");
    const igac = window.localStorage.getItem("instaac");
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
    setUserData({ userName: data.username, id: data.id });
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
    console.log(result);
  };

  return (
    <div className="flex flex-row w-full h-full justify-center">
      <div className="max-w-screen-sm">
        <div onClick={gpt}>Click</div>
        <div className="min-w-[470px]">
          <List
            items={instagramContents}
            child={(data: InstagramContent) => {
              return (
                <DBoardItem {...data} />
                // <Accordion
                //   mainComponent={
                //     <>
                //       <MainItem {...data} />
                //       <ChildItem
                //         onClick={getRepliesData}
                //         userData={userData}
                //         {...data}
                //       />
                //     </>
                //   }
                //   childComponent={<Comments replies={data.replies} />}
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
