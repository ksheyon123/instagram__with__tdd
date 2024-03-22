// import { getAccounts } from "@/apis/api";
import { MainItem } from "@/components/Dashboard/MainItem";
import { Accordion } from "@/components/common/Accordion";
import { Comments } from "@/components/common/Comments";
import { accessCodeAtom } from "@/states/atom";
import { AccordionItem } from "@/types/types";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";

const Dashboard: React.FC = () => {
  const userId = useAtomValue(accessCodeAtom);
  const getItems = async () => {
    const resp = await fetch(`/api/account?userId=${userId}`);
    const data = await resp.json();
    console.log(data);
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <div>
      <Accordion
        items={[]}
        mainComponent={() => <MainItem />}
        childComponent={() => <></>}
      />
    </div>
  );
};

export default Dashboard;
