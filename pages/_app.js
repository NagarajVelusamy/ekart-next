import Head from "next/head";
import "../styles/index.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ekart</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );

}
