import Head from "next/head";
import React from "react";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    if(router.pathname!= "/rpto-registration"){
      router.push('/rpto-registration')
    }
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  const router = useRouter()
  
  return (
    <Fragment>
      <Head>
        <title>Flotanomers | Mangalore, India</title>
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
