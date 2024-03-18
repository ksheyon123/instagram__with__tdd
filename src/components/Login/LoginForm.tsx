import { Button } from "../common/Button";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Input } from "../common/Input";

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
      className={`flex justify-center items-center sm:w-[450px] md:w-[875px] lg:w-[1200px] xl:w-[1800px]`}
    >
      <div className="sm:hidden md:hidden lg:block lg:w-[550px]">
        <Button name="Login with Instagram" onClick={login} />
      </div>
      <div className="flex flex-col justify-center items-center border border-solid border-[${styles.COLOR.GRAY0}] rounded py-2.5 mb-2.5 w-[350px]">
        <Image
          width="175"
          height="51"
          style={{ margin: "36px 0px 12px" }}
          src="@/styles/assets/images/instagram_title_logo.png"
        />
        <Input value="" onChange={() => {}} />
        <Input value="" onChange={() => {}} />
        <Button name="Login with Instagram" onClick={login} />
      </div>
    </div>
  );
};

export { LoginForm };
