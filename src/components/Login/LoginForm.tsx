import { useContext, useState } from "react";
import { Button } from "../common/Button";
import { SDKContext } from "@/contexts/SDKContext";

const LoginForm: React.FC = () => {
  const { fb } = useContext(SDKContext);
  const login = async () => {
    const result = await (fb as any).login();
    console.log(result);
  };
  const go = async () => {
    (fb as any).api("/me", { fields: "name, email" }, function (response) {
      console.log(response);
    });
  };
  return (
    <div className="py-2">
      <Button name="Login with Instagram" onClick={login} />
      <Button name="Login with Instagram" onClick={go} />
    </div>
  );
};

export { LoginForm };
