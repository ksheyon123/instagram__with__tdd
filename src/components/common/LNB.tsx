import { useRouter } from "next/router";

import { PATHNAME } from "@/constants";
import { ChildrenProps } from "@/types/types";

import IGIcon from "@/assets/icons/instagram_icon.svg";
import AddIcon from "@/assets/icons/add_icon.svg";
import MenuIcon from "@/assets/icons/menu_icon.svg";
import MenuHIcon from "@/assets/icons/menu_h_icon.svg";
import HomeIcon from "@/assets/icons/home_icon.svg";
import { useState } from "react";

const ICONS = [
  { name: "add", icon: <AddIcon /> },
  { name: "home", icon: <HomeIcon /> },
];

export const LNB: React.FC = () => {
  const router = useRouter();

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <>
      <div className="fixed top-0 left-0 w-auto h-screen z-10">
        <div className="flex flex-col justify-between w-18 h-full px-3 pt-2 pb-5">
          <div className="w-full h-[92px]">
            <a>
              <div className="my-1 p-3">
                <IGIcon />
              </div>
            </a>
          </div>
          <div className="w-full h-[92px]"></div>
          <div className="flex flex-col justify-end w-full">
            <div
              className="my-1 p-3"
              onClick={() => setIsOpenMenu((prev) => !prev)}
            >
              {isOpenMenu ? <MenuIcon /> : <MenuHIcon />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const HoverEffect: React.FC<ChildrenProps> = ({ children }) => {
  return <div className="">{children}</div>;
};
