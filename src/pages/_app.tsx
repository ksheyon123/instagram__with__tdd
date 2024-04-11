import type { AppProps } from "next/app";

import { Provider as JotaiProvider } from "jotai";
import { NextUIProvider } from "@nextui-org/react";

import { Layout } from "@/components/Basic/Layout";
import { AuthContextProvider } from "@/contexts/AuthContext";

import "@/styles/output.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <NextUIProvider>
        <AuthContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthContextProvider>
      </NextUIProvider>
    </JotaiProvider>
  );
}
