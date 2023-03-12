import Header from '../components/Header/header'
import Hero from '../components/Hero/hero'
import '../styles/globals.css'
import { useEffect, useState } from 'react';
import { WsProvider, ApiPromise } from '@polkadot/api';


function MyApp({ Component, pageProps }) {
  
  const [api, setApi] = useState();

    const setup = () => {
      const wsProvider = new WsProvider('wss://rococo-contracts-rpc.polkadot.io');
      try {
        const api = ApiPromise.create({ provider: wsProvider });
        setApi(api);
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      setup(); 
    }, []);

  return (
    <>
    <Header api={api}></Header>
    <main className='m-0 mr-0 p-0'>
      <Component {...pageProps} />
    </main>
    </>
  );
}

export default MyApp;