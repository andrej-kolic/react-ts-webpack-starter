import {
  createBrowserRouter,
  RouterProvider,
  // MemoryRouter,
  // BrowserRouter,
  // Route,
  // Routes,
  RouteObject,
  createMemoryRouter,
} from 'react-router-dom';
import { AboutPage } from '~/pages/about';
import { HomePage } from '~/pages/home';
import { ErrorPage } from '~/pages/404';
import { Root } from '../Root/index';

// TODO: router based on environment
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const routingType: string = 'browser';

//
// before react-router 6.4
//

// const Router = routingType === 'memory' ? MemoryRouter : BrowserRouter;

// export function _Content() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Root />}>
//           <Route path="home" element={<HomePage />} />
//           <Route path="about" element={<AboutPage />} />
//         </Route>
//         <Route path="*" element={<div>404</div>} />
//       </Routes>
//     </Router>
//   );
// }

//
//
//

const routes: RouteObject[] = [
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
