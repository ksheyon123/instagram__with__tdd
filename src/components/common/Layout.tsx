import { ChildrenProps } from "@/types/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <div className={`${isLoggedIn ? "flex" : "block"} `}>
      <Header />
      <div>
        <main className="relative flex flex-col items-stretch grow shrink-0 z-0 top-0 w-screen h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
