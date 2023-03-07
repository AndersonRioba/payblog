import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getAuthorBySlug  } from '../../lib/api'
import { Card } from "flowbite-react"

export default function Posts({ posts }) {
   return (
    <div className="mb-3 justify-center'">
      <h1 className="mb-3">Posts</h1>
     <div className="posts">
 
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
              <Link href={post.permalink}>
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

            <Link href={post.permalink}>
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