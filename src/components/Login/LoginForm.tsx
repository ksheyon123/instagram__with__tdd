import { Button } from "../common/Button";
import { useRouter } from "next/router";
import { Input } from "../common/Input";

const LoginForm: React.FC = () => {
  const ENDPOINT = process.env.NGROK_ENDPOINT;
  const router = useRouter();
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

  return (
    <article className="flex flex-row justify-center items-stretch mt-8 pb-8 w-full">
      <div className="sm:hidden md:hidden lg:block lg:w-[550px]">
        <Button name="Login with Instagram" onClick={login} />
      </div>
      <div className={`flex flex-col justify-center items-center`}>
        <div
          className={`flex flex-col justify-center items-center border border-solid border-[gray0] rounded py-2.5 mb-2.5 w-[350px]`}
        >
          <div className="mt-9 mb-3">
            <div className="pointer-events-auto">
              <div className="flex w-[175px] h-[51px]">
                <i className="relative overflow-hidden w-full h-full bg-auto bg-left-top" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mb-2.5">
            <div className="mb-[6px] mx-10">
              <Input
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value=""
                onChange={() => {}}
              />
            </div>
            <div className="mb-[6px] mx-10">
              <Input placeholder="비밀번호" value="" onChange={() => {}} />
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
