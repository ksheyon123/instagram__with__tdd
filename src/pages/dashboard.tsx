import { getAccounts } from "@/apis/api";
import { Comments } from "@/components/common/Comments";
import { accessCodeAtom, jwtAtom } from "@/states/atom";
import { AccordionItem } from "@/types/types";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";

const Dashboard: React.FC = () => {
  const userId = useAtomValue(accessCodeAtom);
  const getItems = async () => {
    console.log(userId);
    await fetch(`/api/items?userId=7314100441978717`);
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <div>
      <Comments />
    </div>
  );
};

export default Dashboard;
