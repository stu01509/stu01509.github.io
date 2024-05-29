import '@/src/styles/reset.css';
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const META_TITLE = 'Cliff Su';
const META_DESCRIPTION =
  "Hi, I'm Cliff from Taiwan, an open-source enthusiast, and a remote work lover. My interests are Frontend, Backend and Android App.";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{META_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={META_DESCRIPTION} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={META_TITLE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="/cliff-su-meta@1270x794.png" />
        <meta property="og:url" content="https://cliffsu.me/" />

        <meta name="twitter:title" content={META_TITLE} />
        <meta property="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={META_TITLE} />
        <meta name="twitter:image" content="/cliff-su-meta@1270x794.png" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon@192x192.png" />
      </Head>
      <div className={raleway.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
