import Image from 'next/image'
import { Inter } from 'next/font/google'
import { getAllPosts } from '@/utils/api';
import { PostType } from '@/utils/Types';
import Link from 'next/link';

type Props = {
  posts: PostType[];
}

export async function getStaticProps() {
  const posts: PostType[] = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}


export default function Home({ posts }: Props) {
  return (
    <div style={{ padding: '50px' }}>
      <h1>Nest.js BLOG</h1>
      <ul>
        {posts.map((post: PostType) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <li style={{ borderBottom: '1px solid white', padding: '50px' }} key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p>{post.author}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
