import { getAccounts } from "@/apis/api";
import { Comments } from "@/components/common/Comments";
import { jwtAtom } from "@/states/atom";
import { AccordionItem } from "@/types/types";
import { useAtom } from "jotai";

const NAME1 = "1";
const DESCRIPTION1 = "DESCRIPTION1";
const NAME2 = "2";
const DESCRIPTION2 = "DESCRIPTION2";
let items: AccordionItem[] = [
  { name: NAME1, description: DESCRIPTION1 },
  { name: NAME2, description: DESCRIPTION2 },
];

const Dashboard: React.FC = () => {
  const [jwt, setJwt] = useAtom(jwtAtom);
  const onClick = () => {
    getAccounts(jwt);
  };
  return (
    <div>
      <Comments />
    </div>
  );
};

export default Dashboard;
