import React from 'react';
import bg from '/public/hero.jpg';
import { useEffect, useState } from 'react';

export default function Hero(props) {
  const [genHash, setGenHash] = useState('Fetching genesis hash...');
  const [epochDuration, setEpochDuration] = useState('Fetching epoch...');
  const [balance, setBalance] = useState('0.00');
  const [chainName, setChainName] = useState('Getting chain name...');
  const [connected, setConnected] = useState(false);
  const [accounts, setAccounts] = useState(null);

  const [extensionDapp, setExtensionDapp] = useState(null);

  useEffect(() => {
    import('@polkadot/extension-dapp')
      .then((module) => {
        setExtensionDapp(module);
      })
      .catch((error) => {
        console.error('Error loading @polkadot/extension-dapp:', error);
      });
  }, []);

  const handleConnect = async (api) => {
    const p = await api;

    // Enable the extension
    const extensions = await extensionDapp.web3Enable('payblog');
  
    // Get all the accounts from the extension
    const accounts = await extensionDapp.web3Accounts();

    // Set the signer to the first account from the extension
    const injector = await extensionDapp.web3FromAddress(accounts[0].address);
    p.setSigner(injector.signer);
  
    setConnected(true);
    setAccounts(accounts);

    return p;
  };

  const style = {
    backgroundImage: 'url("../../public/hero.jpg")',
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
