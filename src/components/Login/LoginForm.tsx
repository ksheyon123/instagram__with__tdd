import { Button } from "../common/Button";
import { BorderBox } from "../common/BorderBox";
import { useRouter } from "next/router";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const login = async () => {
    const qs = new URLSearchParams({
      client_id: process.env.FACEBOOK_CLIENT_ID,
      redirect_uri: "http://localhost:3000/signin",
      state: "1234",
      response_type: "token",
      // display: "popup",
      auth_type: "rerequest",
      scope: "email,pages_show_list,public_profile,instagram_basic",
    });

    router.replace(
      `https://www.facebook.com/v19.0/dialog/oauth?${qs}`
      // "popup",
      // "popup=true"
    );
  };

  return (
    <BorderBox>
      <div className="lg:block md:hidden sm:hidden">
        <Button name="Login with Instagram" onClick={login} />
      </div>
      <div className="">
        <Button name="Login with Instagram" onClick={login} />
      </div>
    </BorderBox>
  );
};

export { LoginForm };
