import type { FC } from 'react';

export type AppProps = {
  version: string;
};

// export function App<: FunctionComponent>()<{}> {
//   return <button>test button</button>;
// }

// export const App: FC<AppProps> = () => {
//   return <button>test button</button>;
// };

export const Nav = () => {
  return <nav>Nav bar</nav>;
};

export const App = (props: AppProps) => {
  return (
    <>
      <h1>React typescript starter app</h1>
      <Nav />
      <button>test button</button>
    </>
  );
};
