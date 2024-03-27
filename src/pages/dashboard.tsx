import { ChildItem } from "@/components/Dashboard/ChildItem";
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
    const instaac = window.localStorage.getItem("instaac");
    const resp = await fetch(`/api/account?insta_ac=${instaac}`);
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

  return (
    <div className="flex flex-row w-full h-full justify-center">
      <div className="max-w-screen-sm">
        <div></div>
        <div className="min-w-[470px]">
          <List
            items={instagramContents}
            child={(data: InstagramContent) => {
              console.log(data);
              return (
                <Accordion
                  mainComponent={
                    <>
                      <MainItem {...data} />
                      <ChildItem
                        onClick={getRepliesData}
                        userData={userData}
                        {...data}
                      />
                    </>
                  }
                  childComponent={<Comments replies={data.replies} />}
                />
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
