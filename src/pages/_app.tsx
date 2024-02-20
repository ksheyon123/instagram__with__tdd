import { Layout } from "@/components/common/Layout";
import { AuthContextProvider } from "@/contexts/AuthContext";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </RecoilRoot>
  );
}
