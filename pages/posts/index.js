import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getAuthorBySlug  } from '../../lib/api'
import { Card } from "flowbite-react"
import { useRouter } from "next/router"
import { useEffect, useState } from 'react';
import { WsProvider, ApiPromise } from '@polkadot/api';


export default function Posts({ posts }) {

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

  const wsProvider = new WsProvider('wss://rococo-contracts-rpc.polkadot.io');
  const api = ApiPromise.create({ provider: wsProvider });

  const router = useRouter();

  const navigation = async(api,post) => {
    const  p = await api;
    const extensions = await extensionDapp.web3Enable('payblog');
    const accounts = await extensionDapp.web3Accounts();
    const account = accounts[0];
    const { nonce } = await p.query.system.account(account.address);
  
    if (nonce.gt(BigInt(0))) {
      router.push(post.permalink);
    } else {
      // Display modal or alert
      alert('You must be subscribed to access this post.');
    }
  }

   return (
    <div className="mb-3">
      <h1 className="mb-3">Posts</h1>
     <div className="posts justify-center w-full">
 
      {posts.map(post => {
        const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        })

        return (
          <Card
          className="mb-3 mt-3"
        >
          <article key={post.slug}>
          <Link href="#" onClick={() => navigation(api,post)}>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3">
                {post.title}
              </h3>
          </Link>

            <time dateTime={post.createdAt}>{prettyDate}</time>

            <div>
              <Image alt={post.author.name} src={post.author.profilePictureUrl} height="40" width="40" />

              <span>{post.author.name}</span>
            </div>


            <h5 className="font-normal text-gray-700 dark:text-gray-400">{post.excerpt}</h5>

            <Link href="#" onClick={() => navigation(api,post)}>
              Read more →
            </Link>
          </article>
          </Card>
        )
      })}
     </div>
     </div>
   )
 }
 
 export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts().map(post => ({
        ...post,
        author: getAuthorBySlug(post.author),
      })),
    }
  }
}