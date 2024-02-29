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
      <List
        items={[]}
        child={(d) =>
          d.map((el) => {
            return <div>a</div>;
          })
        }
      />
    </div>
  );
};

export default LoggedIn;
