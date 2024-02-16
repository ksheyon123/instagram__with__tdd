import { ChildrenProps } from "@/types/types";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export { Layout };
