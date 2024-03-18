import { Button } from "../common/Button";
import { styles } from "@/styles";
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
    <div
      className={`flex py-2 border border-solid border-[${styles.COLOR.GRAY0}] rounded sm:w-[420px] md:w-[875px] lg:w-[1200px] xl:w-[1800px]`}
    >
      <div className="sm:hidden md:hidden lg:block lg:w-[500px]">
        <Button name="Login with Instagram" onClick={login} />
      </div>
      <div className="block sm:block sm:w-full w-[350px]">
        <Button name="Login with Instagram" onClick={login} />
      </div>
    </div>
  );
};

export { LoginForm };
