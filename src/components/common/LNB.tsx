import { useRouter } from "next/router";

import { PATHNAME } from "@/constants";
import { ChildrenProps } from "@/types/types";
import {
  IGIcon,
  AddIcon,
  SearchIcon,
  CompassIcon,
  VideoIcon,
  MenuIcon,
  MenuHIcon,
  HomeIcon,
  SendIcon,
  LikeIcon,
  ProfileIcon,
} from "@/assets/icons/index";
import { useState } from "react";
import { List } from "./List";
import Image from "next/image";
// import { Image } from "@nextui-org/react";

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
      <div className="fixed top-0 left-0 w-auto h-screen z-10">
        <div className="flex flex-col justify-between w-18 h-full px-3 pt-2 pb-5">
          <div>
            <div className="w-full h-[92px]">
              <a className="relative">
                <div className="my-1 p-3">
                  <IGIcon className="origin-center hover:scale-105" />
                </div>
              </a>
            </div>

            <div className="relative w-full">
              <List
                items={ICONS}
                child={(data) => {
                  const { icon, modal } = data;
                  return (
                    <HoverEffect>
                      <div className="p-3">{icon}</div>
                      {modal && <ToggleBox />}
                    </HoverEffect>
                  );
                }}
              />
            </div>
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
      className={`absolute left-0 bottom-[-20px] z-3 w-[200px] rounded-[6px]`}
    >
      <div>asdasd</div>
    </div>
  );
};
