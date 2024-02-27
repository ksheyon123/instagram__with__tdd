import { getAccounts } from "@/apis/api";
import { jwtAtom } from "@/states/atom";
import { useAtom } from "jotai";

const LoggedIn: React.FC = () => {
  const [jwt, setJwt] = useAtom(jwtAtom);
  const onClick = () => {
    getAccounts(jwt);
  };
  return <div onClick={() => onClick()}>Logged In</div>;
};

export default LoggedIn;
