import '@/src/styles/reset.css';
import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cliff Su</title>
        <meta name="description" content="Cliff's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={raleway.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
