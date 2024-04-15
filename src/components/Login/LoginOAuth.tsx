import ProfileIcon from "@/assets/icons/profile_icon.jpeg";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/Common/Button";
import { List } from "@/components/Common/List";

type Profile = {
  id: number;
  name: string;
  icon: StaticImageData;
};

const PROFILES: Profile[] = [
  {
    id: 1,
    name: "kshyeon123",
    icon: ProfileIcon,
  },
];

const LoginOAuth: React.FC = () => {
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
              items={PROFILES}
              child={(data) => <OAuthProfile {...data} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const OAuthProfile: React.FC<Profile> = (props) => {
  const { id, name, icon } = props;
  return (
    <div key={id} className="flex flex-row pb-3 items-center">
      <div className="w-8 h-8 mr-3">
        <Image src={icon} alt="profile" />
      </div>
      <div className="grow">{name}</div>
      <div className="w-[68px] h-8">
        <Button name="로그인" onClick={() => {}} />
      </div>
    </div>
  );
};

export { LoginOAuth };
