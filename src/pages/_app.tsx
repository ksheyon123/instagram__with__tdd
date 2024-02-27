import { Layout } from "@/components/common/Layout";
import { AuthContextProvider } from "@/contexts/AuthContext";
import type { AppProps } from "next/app";
import { Provider as JotaiProvider } from "jotai";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </JotaiProvider>
  );
}
