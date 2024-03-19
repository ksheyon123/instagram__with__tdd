import { ChildrenProps } from "@/types/types";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="relative flex flex-col items-stretch grow shrink-0 z-0 top-0 w-screen h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};

export { Layout };
