import { usePostList } from './hooks';

export function PostList() {
  const { status, isLoading, data, error } = usePostList();

  return (
    <div>
      <h3>Posts</h3>

      <div>
        status: {status}, isLoading: {String(isLoading)}, results: {data.length}
      </div>

      {error && <div>ERROR: {error.message}</div>}

      <hr />
      {data.map((post) => (
        <div key={post.id}>
          {post.title}
          <hr />
        </div>
      ))}
    </div>
  );
}
