import { ChildrenProps } from "@/types/types";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <main className="w-screen h-screen">
      <Header />
      <section className="pt-10 pb-10 w-full h-full">{children}</section>
      <Footer />
    </main>
  );
};

export { Layout };
