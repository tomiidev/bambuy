import "../styles/globals.css";
import { Roboto } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

const roboto = Roboto({
  weight:"300",  
  variable: '--font-roboto',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
