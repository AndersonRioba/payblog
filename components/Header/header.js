import { useEffect, useState } from 'react'
import Link from 'next/link'

const NavItem = props =>( 
    <Link href={props.url}><p className="text-xl font-bold text-black px-5 py-1 hover:bg-red-500 rounded transition-colors duration-300">{props.text}</p></Link>
    );

export default function Header(props) {

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

//make a transaction  to the blog service contract

const [Subscribed, setSubscribed] = useState(false);

const subscribe = async(api) => {

  const p = await api;

    // Get all the accounts from the extension
    const accounts = await extensionDapp.web3Accounts();

    const account = accounts[0];

    const { nonce } = await p.query.system.account(account.address);
    if (nonce.gt(BigInt(0))) {
      setSubscribed(true);
      console.log('Already subscribed');
      return;
    }

    const transferExtrinsic = p.tx.balances.transfer(
      '5HiW2C2YLsVit73jC7h3x25hbXGpMZp4qxmVF3Qh7VY26eqR', 
      200000000000);

    const injector = await extensionDapp.web3FromSource(account.meta.source);

    transferExtrinsic.signAndSend(account.address, {signer: injector.signer}, ({status}) => {
      if(status.isInBlock) {
        setSubscribed(true);
        console.log('Subscribed');
      } else {
        console.log('In progress');
      }
    });
}

  return (
    <div className="container mx-auto">
      <nav className="flex justify-between p-4">
        <div className="flex items-center">
        <div className="inline-block h-30 w-30 rounded-full ">
        <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" width="100" height="100" alt=""/>
        </div>  
        </div>
        <div className="flex mt-4">
          <NavItem url="/posts" text="Explore"/>
          <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md" onClick={() => subscribe(props.api)}>{Subscribed ? 'Subscribed' : 'Subscribe'}</button>
        </div>
      </nav>
    </div>
  )
}