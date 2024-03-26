// import { getAccounts } from "@/apis/api";
import { ChildItem } from "@/components/Dashboard/ChildItem";
import { MainItem } from "@/components/Dashboard/MainItem";
import { Accordion } from "@/components/common/Accordion";
import { Comments } from "@/components/common/Comments";
import { staAccessCodeAtom } from "@/states/atom";
import { InstagramContent } from "@/types/types";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const [instagramContents, setInstagramContents] = useState<
    InstagramContent[]
  >([]);
  // const fbac = window.localStorage.getItem("fbac");

  const getMedia = async (data) => {
    const fbac = window.localStorage.getItem("fbac");
    const { id } = data;
    console.log(id);
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
    const { contents } = data;
    if (contents) {
      const newArr = await Promise.all(
        (contents as any[]).map((el) => getMedia(el))
      );
      setInstagramContents(newArr);
    }
  };
  const d = async () => {
    const d = await fetch("/api/openai");
    const { data } = await d.json();
    console.log(data);
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <div className="flex flex-row w-full h-full justify-center">
      <div className="max-w-screen-sm">
        <div></div>
        <div className="min-w-[470px]">
          <Accordion
            items={instagramContents}
            mainComponent={(data) => <MainItem {...data} />}
            childComponent={(data) => (
              <Accordion items={[{}]} mainComponent={() => <ChildItem />} />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
