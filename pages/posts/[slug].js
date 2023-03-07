import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, getAuthorBySlug, getPostBySlug } from '../../lib/api'

const BlogHeader = styled.header`
  background-color: #f0f0f0;
  padding: 20px;
`;

const BlogContent = styled.main`
  padding: 20px;
  width: 100%;
`;

const BlogFooter = styled.footer`
  background-color: #f0f0f0;
  padding: 20px;
`;

export default function Post({ post }) {
  const prettyDate = new Date(post.createdAt).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  return (
    <div className="w-screen h-full">
    <BlogHeader>
      <h1>{post.title}</h1>
      <div>
        <Image alt={post.author.name} src={post.author.profilePictureUrl} height={40} width={40} />

        <div>
          <strong>
            <Link href={post.author.permalink}>
              {post.author.name}
            </Link>
          </strong>

          <time dateTime={post.createdAt}>{prettyDate}</time>
        </div>
      </div>
    </BlogHeader>
    <BlogContent>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </BlogContent>
    <BlogFooter>
      <time dateTime={post.createdAt}>{prettyDate}</time>
    </BlogFooter>
    </div>
  )
}

export function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug)
  const author = getAuthorBySlug(post.author)

  return {
    props: {
      post: {
        ...post,
        author,
      },
    },
  }
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getAllPosts().map(post => ({
      params: {
        slug: post.slug,
      },
    })),
  }
}