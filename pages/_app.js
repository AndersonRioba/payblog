import Header from '../components/Header/header';
import '../styles/globals.css';
import { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";

function MyApp({ Component, pageProps }) {
  return (
    <><Header></Header><MeshProvider>
      <Component {...pageProps} />
    </MeshProvider></>
  );
}

export default MyApp;