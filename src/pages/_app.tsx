import { Layout } from "@/components/common/Layout";
import type { AppProps } from "next/app";
import { SDKContextProvider } from "@/contexts/SDKContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SDKContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SDKContextProvider>
  );
}
