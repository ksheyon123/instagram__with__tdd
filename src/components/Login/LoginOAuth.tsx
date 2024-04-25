import ProfileIcon from "@/assets/icons/profile_icon.jpeg";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/Common/Button";
import { List } from "@/components/Common/List";
import { AccountInfo } from "@/types/types";
import { styles } from "@/styles";
import { useAuthHook } from "@/hooks/useAuthHook";

interface IProps {
  accounts: AccountInfo[];
}

const LoginOAuth: React.FC<IProps> = ({ accounts }) => {
  return (
    <div className="flex flex-col justify-center max-w-[350px] w-full">
      <div className="mt-2 mb-4 px-3">
        <span className="block text-sm break-words whitespace-pre-line text-center">
          계정 센터에 포함된 계정이므로 이 계정으로 로그인할 수 있습니다.
        </span>
      </div>
      <div>
        <div className="p-4">
          <div className="flex flex-col border-t pt-3 border-gray239">
            <List
              items={accounts}
              child={(data) => <OAuthProfile {...data} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const OAuthProfile: React.FC<AccountInfo> = (props) => {
  const { id, username, profile_picture_url } = props;
  const { goToOAuthIG } = useAuthHook();

  return (
    <div key={id} className="flex flex-row pb-3 items-center">
      <div className="w-8 h-8 mr-3 overflow-hidden rounded-full">
        <Image width={32} height={32} src={profile_picture_url} alt="profile" />
      </div>
      <div className="grow">{username}</div>
      <div className="w-[68px] h-8">
        <Button
          name="로그인"
          onClick={() => goToOAuthIG()}
          style={{ opacity: 1 }}
        />
      </div>
    </div>
  );
};

export { LoginOAuth };
