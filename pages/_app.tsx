import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

const inter = Inter({
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
