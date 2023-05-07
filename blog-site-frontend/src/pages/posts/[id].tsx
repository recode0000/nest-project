import React from 'react'
import { getAllPosts, getPostById } from '@/utils/api';
import { PostType } from '@/utils/Types';

type Props = {
  post: PostType;
}

export async function getStaticProps({ params }: any) {
  const post: PostType = await getPostById(params.id);
  console.log(post);

  return {
    props: {
      post,
    },
  };
}

//Posts/1 posts/2 posts:/3
export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post: PostType) => ({
    params: {id: post.id},
  }));

  return {
    paths,
    fallback: false
  }
}

const Post = ({ post }: Props) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>createdAt: {post.createdAt}</p>
    </div>
  );
}

export default Post;