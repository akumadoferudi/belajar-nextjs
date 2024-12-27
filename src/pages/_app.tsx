import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";
import { UserContextProvider } from "@/context/userContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <UserContextProvider {...pageProps}>
        <Component {...pageProps} />
        <Toaster />
      </UserContextProvider>
    </Provider>
  );
}
