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
  {
    name: "add",
    icon: <AddIcon className="relative origin-center hover:scale-105" />,
    modal: true,
  },
  {
    name: "home",
    icon: <HomeIcon className="relative origin-center hover:scale-105" />,
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
              {ICONS.map(({ icon, modal }) => {
                return (
                  <HoverEffect>
                    <div className="p-3">{icon}</div>
                    {modal && <ToggleBox />}
                  </HoverEffect>
                );
              })}
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
