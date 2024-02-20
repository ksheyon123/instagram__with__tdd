import { useContext, useState } from "react";
import { Button } from "../common/Button";
import { SDKContext } from "@/contexts/SDKContext";
import { bypass, loginFB } from "@/apis/api";
import { useRouter } from "next/router";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const { fb } = useContext(SDKContext);
  const login = async () => {
    const qs = new URLSearchParams({
      client_id: "1367563664130376",
      redirect_uri: "http://localhost:3000",
      state: "1234",
    });
    // await bypass();
    router.push(`https://www.facebook.com/v19.0/dialog/oauth?${qs}`);
  };

  return (
    <div className="py-2">
      <Button name="Login with Instagram" onClick={login} />
    </div>
  );
};

export { LoginForm };
