import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Content } from './Content/index';
import './styles.css';

//

const MAX_REMOTE_DATA_CACHE_DURATION = 1000 * 60 * 60 * 24; // 1 day

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: MAX_REMOTE_DATA_CACHE_DURATION,
    },
  },
});

export type AppProps = {
  version: string;
};

export const App = (props: AppProps) => {
  // TODO: add providers
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Content />
      </QueryClientProvider>
    </React.StrictMode>
  );
};
