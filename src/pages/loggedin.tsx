import { getAccounts } from "@/apis/api";
import { Accordion } from "@/components/common/Accordion";
import { jwtAtom } from "@/states/atom";
import { useAtom } from "jotai";

const LoggedIn: React.FC = () => {
  const [jwt, setJwt] = useAtom(jwtAtom);
  const onClick = () => {
    getAccounts(jwt);
  };
  return (
    <div>
      <Accordion
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
