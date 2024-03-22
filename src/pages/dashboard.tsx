// import { getAccounts } from "@/apis/api";
import { Accordion } from "@/components/common/Accordion";
import { Comments } from "@/components/common/Comments";
import { accessCodeAtom } from "@/states/atom";
import { AccordionItem } from "@/types/types";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";

const Dashboard: React.FC = () => {
  const userId = useAtomValue(accessCodeAtom);
  const getItems = async () => {
    const items = await fetch(`/api/items?userId=7314100441978717`);
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <div>
      <Accordion items={[]} />
    </div>
  );
};

export default Dashboard;
