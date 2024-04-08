import { useRouter } from "next/router";

import { PATHNAME } from "@/constants";
import { ChildrenProps } from "@/types/types";
import IGIcon from "public/assets/icons/instagram_icon.svg";
import AddIcon from "public/assets/icons/add_icon.svg";
import SearchIcon from "public/assets/icons/search_icon.svg";
import CompassIcon from "public/assets/icons/compass_icon.svg";
import VideoIcon from "public/assets/icons/video_icon.svg";
import MenuIcon from "public/assets/icons/menu_icon.svg";
import MenuHIcon from "public/assets/icons/menu_h_icon.svg";
import HomeIcon from "public/assets/icons/home_icon.svg";
import SendIcon from "public/assets/icons/send_icon.svg";
import LikeIcon from "public/assets/icons/like_icon.svg";
import PostIcon from "public/assets/icons/post_icon.svg";
import LiveIcon from "public/assets/icons/live_icon.svg";

import ProfileIcon from "public/assets/icons/profile_icon.jpeg";

import { useState } from "react";
import { List } from "./List";
import Image from "next/image";

const ICONS = [
  {
    name: "home",
    icon: <HomeIcon className="relative origin-center hover:scale-105" />,
  },

  {
    name: "search",
    icon: <SearchIcon className="relative origin-center hover:scale-105" />,
  },
  {
    name: "compass",
    icon: <CompassIcon className="relative origin-center hover:scale-105" />,
  },
  {
    name: "video",
    icon: <VideoIcon className="relative origin-center hover:scale-105" />,
  },
  {
    name: "send",
    icon: <SendIcon className="relative origin-center hover:scale-105" />,
  },
  {
    name: "like",
    icon: <LikeIcon className="relative origin-center hover:scale-105" />,
  },
  {
    name: "add",
    icon: <AddIcon className="relative origin-center hover:scale-105" />,
    modal: true,
  },
  {
    name: "profile",
    icon: <Image width={24} height={24} src={ProfileIcon} alt="profile" />,
    modal: true,
  },
];

export const LNB: React.FC = () => {
  const router = useRouter();

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <>
      <div className="fixed top-0 left-0 w-auto h-screen z-[1] border-r border-gray219">
        <div className="flex flex-col items-start w-18 h-full px-3 pt-2 pb-5">
          <div className="relative block w-full h-[92px] shrink-0">
            <div className="absolute h-[73px] w-12 mt-3 top-0">
              <a className="relative">
                <div className="my-1 p-3">
                  <IGIcon className="origin-center hover:scale-105" />
                </div>
              </a>
            </div>
          </div>

          <div className="grow w-full">
            <List
              items={ICONS}
              child={(data) => {
                const { icon, modal } = data;
                return (
                  <div className="relative flex items-center">
                    <div className="my-1">
                      <HoverEffect>
                        <div className="p-3">
                          <div>{icon}</div>
                        </div>
                      </HoverEffect>
                    </div>
                    {modal && <ToggleBox />}
                  </div>
                );
              }}
            />
          </div>

          <div className="flex flex-col justify-end w-full">
            <div className="my-1">
              <HoverEffect>
                <div
                  className="p-3"
                  onClick={() => setIsOpenMenu((prev) => !prev)}
                >
                  {isOpenMenu ? <MenuIcon /> : <MenuHIcon />}
                </div>
              </HoverEffect>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const HoverEffect: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="relative w-full hover:transition hover:ease hover:duration-300 hover:bg-[#000]/[0.05] rounded-lg">
      {children}
    </div>
  );
};

const ToggleBox: React.FC = (fixed = "") => {
  return (
    <div
      className={`absolute left-0 bottom-[-20px] bg-white z-[3] w-[200px] rounded-[6px]`}
      style={{
        filter: "drop-shadow(0 0 5px rgba(0,0,0,0.0975))",
      }}
    >
      <div className="flex flex-col w-full h-full rounded-[6px]">
        <div className="px-4 py-2">
          <div>게시물</div>
          <div>
            <PostIcon />
          </div>
        </div>
        <div className="px-4 py-2">
          <div>라이브 방송</div>
          <div>
            <LiveIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
