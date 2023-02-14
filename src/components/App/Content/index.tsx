import { lazy } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  createMemoryRouter,
} from 'react-router-dom';

import { Layout } from '../Layout/index';
import { ErrorPage } from '~/pages/404';

const AsyncHomePage = lazy(() =>
  import('~/pages/home').then((module) => ({
    default: module.HomePage,
  })),
);

const AsyncAboutPage = lazy(() =>
  import('~/pages/about').then((module) => ({
    default: module.AboutPage,
  })),
);

// TODO: router based on environment
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const routingType: string = 'browser';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home/',
        element: <AsyncHomePage />,
      },
      {
        path: 'about/',
        element: <AsyncAboutPage />,
        loader: async () => {
          await Promise.resolve();
          console.log('loading about page 2');
          return { data: 123 };
        },
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <div>404</div>,
  // },
];

const router =
  routingType === 'memory'
    ? createMemoryRouter(routes)
    : createBrowserRouter(routes);

export function Content() {
  return <RouterProvider router={router} />;
}
