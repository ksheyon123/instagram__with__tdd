import { getAccounts } from "@/apis/api";
import { List } from "@/components/common/List";
import { jwtAtom } from "@/states/atom";
import { useAtom } from "jotai";

const LoggedIn: React.FC = () => {
  const [jwt, setJwt] = useAtom(jwtAtom);
  const onClick = () => {
    getAccounts(jwt);
  };
  return (
    <div>
      <List items={[]} child={<div>A</div>} />
    </div>
  );
};

export default LoggedIn;
