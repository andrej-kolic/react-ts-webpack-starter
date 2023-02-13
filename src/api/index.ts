import type { AxiosInstance } from 'axios';

export type Post = {
  id: number;
  title: string;
};

export type PostsResponseData = {
  data: Post[];
};

export async function getPosts(client: AxiosInstance) {
  const posts = await client.get<PostsResponseData>('posts');
  return posts.data;
}
