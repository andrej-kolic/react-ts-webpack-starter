import { useQuery } from 'react-query';

import { getPosts } from '~/api';
import type { GetPostsResponseData } from '~/api';
import { useApiClient } from '~/hooks/navigation';

function usePosts() {
  const client = useApiClient();
  const {
    status,
    isLoading,
    data: responseBody,
    error,
  } = useQuery<GetPostsResponseData, Error>('posts', () => {
    // if there are input parameters and some of them are not available,
    // return empty array HERE (to respect rules of hooks)
    return getPosts(client);
  });

  console.log('* data:', responseBody);
  return {
    status,
    isLoading,
    data: responseBody || [],
    error,
  };
}

export function usePostList() {
  console.log('requesting posts...');
  return usePosts();
}
