import React from 'react';
import { Content } from './Content/index';

export type AppProps = {
  version: string;
};

export const App = (props: AppProps) => {
  // TODO: add providers
  return (
    <React.StrictMode>
      <Content />
    </React.StrictMode>
  );
};
