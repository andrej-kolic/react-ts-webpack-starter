import { PostList } from '~/features/posts/PostList';

export const HomePage = () => {
  return (
    <div data-testid="page-home">
      <h1>Home Page</h1>
      <PostList />
    </div>
  );
};
