import { getAccessToken } from "@/apis/api";
import { jwtStateAtom } from "@/states/atom";
import { useRecoilValue } from "recoil";

const LoggedIn: React.FC = () => {
  const jwt = useRecoilValue(jwtStateAtom);
  const onClick = () => {
    getAccessToken(jwt);
  };
  return <div onClick={() => onClick()}>Logged In</div>;
};

export default LoggedIn;
