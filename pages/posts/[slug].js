import { getAllPosts, getPostBySlug } from '../../lib/api';
import styled from 'styled-components';

const BlogHeader = styled.header`
  background-color: #f0f0f0;
  padding: 20px;
`;

const BlogContent = styled.main`
  padding: 20px;
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
    <div className="flex w-full">
    <div className="posts">
    <BlogHeader>
      <h1>{post.title}</h1>
    </BlogHeader>
    <BlogContent>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </BlogContent>
    <BlogFooter>
      <time dateTime={post.createdAt}>{prettyDate}</time>
    </BlogFooter>
    </div>
    </div>
  )
}

export function getStaticProps({ params }) {
    return {
      props: {
        post: getPostBySlug(params.slug),
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