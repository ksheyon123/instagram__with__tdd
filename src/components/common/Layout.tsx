import { ChildrenProps } from "@/types/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";
import { LNB } from "./LNB";

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);
  return (
    // <div className={`${isLoggedIn ? "flex" : "block"} `}>
    <div className={"flex"}>
      {/* <Header /> */}
      <LNB />
      {/* <div className="fixed left-0 w-[72px] h-screen"></div> */}
      <div
        className={`${
          isLoggedIn
            ? "ml-auto w-[calc(100%-72px)] h-full align-center align-center"
            : ""
        }`}
      >
        <main className="relative flex flex-col items-stretch grow shrink-0 z-0 top-0 w-screen h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
