import Head from "next/head";
import React from "react";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Oxence - Web Design Company React NextJS Template</title>
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
