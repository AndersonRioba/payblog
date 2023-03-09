import React from 'react';
import bg from '../../public/hero.jpg';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const web3Accounts = dynamic(() => import('@polkadot/extension-dapp'), { ssr: false });
const web3Enable = dynamic(() => import('@polkadot/extension-dapp'), { ssr: false });
const { WsProvider, ApiPromise } = dynamic(() => import('@polkadot/api'), { ssr: false });
const WProvider = dynamic(() => import('@polkadot/rpc-provider'), { ssr: false });

function Hero(props) {
  const [connected, setConnected] = useState(false);

  const handleConnect = async (api) => {
    const p = await api;
    console.log(p.genesisHash.toHuman());
    setConnected(true);
  };

  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="flex w-full h-full items-center justify-center p-20 bg-gray-500 bg-opacity-50 bg-center bg-cover" style={style}>
      <div className="flex-col flex items-center">
        <h1 className="text-5xl font-bold">Never Stop Exploring!</h1>
        <p className="text-lg">Description Subheading</p>
        <div className="mt-4">
          <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md" onClick={() => handleConnect(props.api)}>{connected ? 'Connected' : 'Connect'}</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
