import { Button } from "../Common/Button";
import { useRouter } from "next/router";
import { Input } from "../Common/Input";
import { useState } from "react";

import ScreenShot1 from "@/assets/images/screenshot1_2x.png";
import ScreenShot2 from "@/assets/images/screenshot2_2x.png";
import ScreenShot3 from "@/assets/images/screenshot3_2x.png";
import ScreenShot4 from "@/assets/images/screenshot4_2x.png";
import { ImageSlider } from "@/components/Common/ImageSlider";

const LoginForm: React.FC = () => {
  const ENDPOINT = process.env.NGROK_ENDPOINT;
  const router = useRouter();

  const images = [ScreenShot1, ScreenShot2, ScreenShot3, ScreenShot4];
  const login = async () => {
    const qs = new URLSearchParams({
      client_id: process.env.FACEBOOK_CLIENT_ID,
      redirect_uri: `${ENDPOINT}/login/fb/callback`,
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
      `https://www.facebook.com/v19.0/dialog/oauth?${qs}`
      // "popup",
      // "popup=true"
    );
  };

  const [userName, setUserName] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  return (
    <article className="flex flex-row justify-center items-stretch mt-8 pb-8 w-full shrink-0 grow">
      <div className="relative flex justify-center items-center sm:hidden md:hidden lg:flex mb-3 mr-8">
        <div className="relative flex w-[380.32px] basis-[380.32px] h-[581.15px] bg-home-phone bg-cover bg-left-46 bg-home-p-size ">
          <div className="relative flex flex-col mt-[27px] ml-[112px]">
            <div className="absolute left-0 z-10 w-[250px] h-[538.84px]">
              <ImageSlider images={images} width={250} height={538.84} />
            </div>
          </div>
        </div>
      </div>

      <div className={`flex flex-col justify-start items-center`}>
        <div
          className={`flex flex-col justify-center items-center border border-solid border-[gray0] rounded py-2.5 mb-2.5 w-[350px]`}
        >
          <div className="mt-9 mb-3">
            <div className="pointer-events-auto">
              <div className="flex w-[175px] h-[51px]">
                <i className="relative overflow-hidden w-full h-full bg-auto bg-left-top bg-ig-imgs-1 bg-ig-logo-size bg-l-0-t-0" />
              </div>
            </div>
          </div>
          <div className="mt-6 mb-2.5 max-w-[350px] w-full ">
            <div className="flex flex-col ">
              <div className="mb-[6px] mx-10">
                <Input
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
                <Button name="Login with Instagram" onClick={login} />
              </div>
              <div className="mx-10 mb-[22px] mt-[14px]">
                <div className="flex">
                  <div
                    className={`relative top-2.5 h-[1px] grow bg-[gray0]`}
                  ></div>
                  <div className="mx-[18px]">또는</div>
                  <div
                    className={`relative top-2.5 h-[1px] grow bg-[gray0]`}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col items-stretch self-auto grow-0 self-auto my-2 mx-10">
                <Button
                  name="Facebook으로 로그인"
                  onClick={() => {}}
                  btnStyleType="fb0"
                />
              </div>
              <a className="inline text-center mt-3">
                <span className="block font-normal text-fb0 text-xs">
                  Forgot password?
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center border border-solid border-[gray0] rounded py-2.5 mb-2.5 w-[350px]">
          <div className="block">
            <span className="leading-[18px]">
              <p className="m-[15px] text-black font-normal">
                {"Don't have an account? "}
                <a>
                  <span className="text-hfb0 font-semibold">Register</span>
                </a>
              </p>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export { LoginForm };
