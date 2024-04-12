import { Button } from "../Common/Button";
import { useRouter } from "next/router";
import { Input } from "../Common/Input";
import { useState } from "react";
import { PATHNAME } from "@/constants";
import { Tooltip } from "@nextui-org/react";

const LoginForm: React.FC = () => {
  // const ENDPOINT = process.env.NGROK_ENDPOINT;
  const router = useRouter();

  const login = async () => {
    const qs = new URLSearchParams({
      client_id: process.env.FACEBOOK_CLIENT_ID,
      redirect_uri: `/login/fb/callback`,
      state: "1234",
      response_type: "token",
      // display: "popup",
      auth_type: "rerequest",
      scope:
        "public_profile, instagram_basic, pages_show_list, instagram_manage_comments, pages_read_engagement",
      // scope: ", instagram_basic, pages_show_list",
    });

    //email,instagram_basic,pages_show_list
    // https://www.facebook.com/v19.0/dialog/oauth?
    // response_type=token&display=popup&client_id=949275753220874
    // &redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer%2Fcallback&auth_type=rerequest&scope=
    router.replace(
      `${PATHNAME.OAUTH_FB}?${qs}`
      // "popup",
      // "popup=true"
    );
  };

  const [userName, setUserName] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  return (
    <div className="mt-6 mb-2.5 max-w-[350px] w-full ">
      <div className="flex flex-col ">
        <div className="mb-[6px] mx-10">
          <Input
            disabled
            name="username"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={userName}
            onChange={(e) => {
              const str = e.target.value;
              setUserName(str);
            }}
          />
        </div>
        <div className="mb-[6px] mx-10">
          <Input
            disabled
            name="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => {
              const str = e.target.value;
              setPw(str);
            }}
          />
        </div>
        <div className="my-2 mx-10">
          <Tooltip content="인스타그램 직접 로그인은 불가능 합니다.">
            <div>
              <Button
                disabled={true}
                name="로그인"
                onClick={login}
                style={{ cursor: "not-allowed" }}
              />
            </div>
          </Tooltip>
        </div>
        <div className="mx-10 mb-[22px] mt-[14px]">
          <div className="flex">
            <div className={`relative top-2.5 h-[1px] grow bg-gray219`}></div>
            <div className="mx-[18px]">또는</div>
            <div className={`relative top-2.5 h-[1px] grow bg-gray219`}></div>
          </div>
        </div>
        <div className="flex flex-col items-stretch self-auto grow-0 self-auto my-2 mx-10">
          <Button
            name="Facebook으로 로그인"
            imgEl={
              <div className="relative inline-block top-[3px] w-4 h-4 bg-log-fb-pos bg-log-fb-size bg-log-fb-0 mr-2" />
            }
            onClick={login}
            btnStyleType="fb0"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </div>
        <a className="inline text-center mt-3">
          <span className="cursor-not-allowed block font-normal text-fb0 text-xs">
            {/* Forgot password? */}
            비밀번호를 잊으셨나요?
          </span>
        </a>
      </div>
    </div>
  );
};

export { LoginForm };
