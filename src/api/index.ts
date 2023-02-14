import type { AxiosInstance } from 'axios';

export type Post = {
  id: number;
  title: string;
};

export type GetPostsResponseData = Post[];

export async function getPosts(client: AxiosInstance) {
  const posts = await client.get<GetPostsResponseData>('posts');
  return posts.data;
}
