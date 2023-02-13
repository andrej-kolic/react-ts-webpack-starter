import { useEffect } from 'react';
import { getPosts } from '~/api';
import { useApiClient } from '~/hooks/navigation';

export const HomePage = () => {
  const client = useApiClient();
  useEffect(() => {
    console.log('requesting posts...');
    void (async () => {
      const posts = await getPosts(client);
      console.log('POSTS:', posts);
    })();
  }, []);

  return (
    <div data-testid="page-home">
      <h1>Home Page</h1>
    </div>
  );
};
