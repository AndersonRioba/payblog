import Link from 'next/link';
import { getAllPosts } from '../../lib/api'
import PostCard from '../../components/postCard/postCard';

export default function Posts({ posts }) {
   return (
     <div className="posts">
       <h1>Posts</h1>
 
      {posts.map(post => {
        const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        })

        return (
          <article key={post.slug}>
            <h2>
              <Link href={post.permalink}>
                <p>{post.title}</p>
              </Link>
            </h2>

            <time dateTime={post.createdAt}>{prettyDate}</time>

            <p>{post.excerpt}</p>

            <Link href={post.permalink}>
              <p>Read more →</p>
            </Link>
          </article>
        )
      })}

        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>
  
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
     </div>
   )
 }
 
 export function getStaticProps() {
    return {
      props: {
        posts: getAllPosts(),
      }
    }
  }
