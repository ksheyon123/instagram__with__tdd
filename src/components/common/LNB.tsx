import { useRouter } from "next/router";

import { PATHNAME } from "@/constants";
import { ChildrenProps, ToggleModalItem } from "@/types/types";
import IGIcon from "@/assets/icons/instagram_icon.svg";
import AddIcon from "@/assets/icons/add_icon.svg";
import SearchIcon from "@/assets/icons/search_icon.svg";
import CompassIcon from "@/assets/icons/compass_icon.svg";
import VideoIcon from "@/assets/icons/video_icon.svg";
import MenuIcon from "@/assets/icons/menu_icon.svg";
import MenuHIcon from "@/assets/icons/menu_h_icon.svg";
import HomeIcon from "@/assets/icons/home_icon.svg";
import SendIcon from "@/assets/icons/send_icon.svg";
import LikeIcon from "@/assets/icons/like_icon.svg";

import PostIcon from "@/assets/icons/post_icon.svg";
import LiveIcon from "@/assets/icons/live_icon.svg";
import AIIcon from "@/assets/icons/ai_icon.svg";

import ProfileIcon from "@/assets/icons/profile_icon.jpeg";

import { useState } from "react";
import { List } from "./List";
import Image from "next/image";
import { ToggleModal } from "@/components/Modal/ToggleModal";

const NAVS = [
  {
    name: "home",
    icon: <HomeIcon />,
  },
  {
    name: "search",
    icon: <SearchIcon />,
  },
  {
    name: "compass",
    icon: <CompassIcon />,
  },
  {
    name: "video",
    icon: <VideoIcon />,
  },
  {
    name: "send",
    icon: <SendIcon />,
  },
  {
    name: "like",
    icon: <LikeIcon />,
  },
  {
    name: "add",
    icon: <AddIcon />,
    modal: false,
  },
  {
    name: "ai",
    icon: <AIIcon />,
  },
  {
    name: "profile",
    icon: <Image width={24} height={24} src={ProfileIcon} alt="profile" />,
    modal: false,
  },
];

export const LNB: React.FC = () => {
  const router = useRouter();

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const toggleModalItems: ToggleModalItem[] = [
    {
      title: "게시물",
      icon: <PostIcon />,
      url: "",
    },
    {
      title: "라이브 방송",
      icon: <LiveIcon />,
      url: "",
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-auto h-screen z-[1] border-r border-gray219">
        <div className="flex flex-col items-start w-18 h-full px-3 pt-2 pb-5">
          <div className="relative block w-full h-[92px] shrink-0">
            <div className="absolute h-[73px] w-12 mt-3 top-0">
              <a className="relative">
                <div className="my-1 ">
                  <HoverEffect>
                    <div className="p-3">
                      <IGIcon className="origin-center hover:scale-105" />
                    </div>
                  </HoverEffect>
                </div>
              </a>
            </div>
          </div>

          <div className="grow w-full">
            <List
              items={NAVS}
              child={(data) => {
                const { icon, modal } = data;
                return (
                  <div
                    className="group relative flex items-center"
                    onClick={() => {}}
                  >
                    <div className="relative my-1">
                      <HoverEffect>
                        <div className="p-3">
                          <div className="relative origin-center group-hover:scale-105">
                            {icon}
                          </div>
                        </div>
                      </HoverEffect>
                      <div className="relative">
                        {modal && <ToggleModal items={toggleModalItems} />}
                      </div>
                    </div>
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
    <div className="relative w-full group-hover:cursor-pointer group-hover:transition group-hover:ease group-hover:duration-300 group-hover:bg-[#000]/[0.05] rounded-lg">
      {children}
    </div>
  );
};
