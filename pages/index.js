import Hero from '../components/Hero/hero';
import { useEffect, useState } from 'react';
import { WsProvider, ApiPromise } from '@polkadot/api';



export default function Home() {

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
    <div className='flex w-screen h-screen '>
      <Hero api={api} ></Hero>
    </div>
  )
}
