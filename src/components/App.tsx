import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutPage } from '~/pages/about/index';
import { HomePage } from '~/pages/home/index';
import ErrorPage from './error-page';
import { Root } from './Root/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home/',
        element: <HomePage />,
      },
      {
        path: 'about/',
        element: <AboutPage />,
      },
    ],
  },
]);

export type AppProps = {
  version: string;
};

export const App = (props: AppProps) => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
