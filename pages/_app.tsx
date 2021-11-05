import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NextSeo } from "next-seo";

function PortfolioApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <NextSeo
        title='Portfolio • Stan'
        description={`A showcase of Stan's portfolio`}
        canonical='https://standehorn.nl/'
        openGraph={{
          url: "https://standehorn.nl",
          title: "Portfolio • Stan",
          description: "A showcase of Stan's portfolio",
          site_name: "Portfolio",
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default PortfolioApp;
