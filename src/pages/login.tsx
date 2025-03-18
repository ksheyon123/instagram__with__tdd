import { useEffect, useState } from "react";

import { ImageSlider } from "@/components/Common/ImageSlider";

import ScreenShot1 from "@/assets/images/screenshot1_2x.png";
import ScreenShot2 from "@/assets/images/screenshot2_2x.png";
import ScreenShot3 from "@/assets/images/screenshot3_2x.png";
import ScreenShot4 from "@/assets/images/screenshot4_2x.png";
import { LoginForm } from "@/components/Login/LoginForm";
import { LoginOAuth } from "@/components/Login/LoginOAuth";
import { getFBProfile, getIGProfile, getIGProfilesByPageId, getUserProfile } from "@/apis/api";
import { Spinner } from "@nextui-org/react";
import { AccountInfo } from "@/types/types";

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const [accounts, setAccounts] = useState<AccountInfo[]>([]);

  const images = [ScreenShot1, ScreenShot2, ScreenShot3, ScreenShot4];

  // useEffect(() => {
  //   const chkFBAuth = async () => {
  //     setIsLoading(true);
  //     try {
  //       const pages = await getUserProfile();
  //       console.log("getUserProfile : ", pages)
  //       setAccounts(accounts);
  //       setIsLoggedIn(true);
  //     } catch (e) {
  //       console.log(e)
  //       const err = typeof e ? JSON.parse(e) : e;
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   chkFBAuth();
  // }, []);

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

      <div className="flex flex-col items-center justify-center ">
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
            {!isLoading && !isLoggedIn && <LoginForm />}
            {!isLoading && isLoggedIn && <LoginOAuth accounts={accounts} />}
            {isLoading && <Spinner />}
          </div>
          <div className="flex flex-col justify-center items-center border border-solid border-[gray0] rounded py-2.5 mb-2.5 w-[350px]">
            <div className="block">
              <span className="leading-[18px]">
                <p className="m-[15px] text-black font-normal">
                  {/* {"Don't have an account? "} */}
                  {"계정이 없으신가요? "}
                  <a>
                    <span className="cursor-not-allowed text-hfb0 font-semibold">
                      {/* Register */}
                      가입하기
                    </span>
                  </a>
                </p>
              </span>
            </div>
            <div className="block">
              <span className="leading-[18px]">
                <p className="m-[15px] text-black font-normal">
                  <a
                    className="cursor-pointer"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    <span className="cursor-not-allowed text-hfb0 font-semibold ">
                      {/* Register */}
                      계정 변경{" "}
                    </span>
                  </a>
                  {/* {"Don't have an account? "} */}
                  {"또는 "}
                  <a>
                    <span className="cursor-not-allowed text-hfb0 font-semibold">
                      {/* Register */}
                      가입하기
                    </span>
                  </a>
                </p>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[350px] h-[95px]"></div>
        </div>
      </div>
    </article>
  );
};

export default LoginPage;
