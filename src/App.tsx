import { NavBar } from '~/components/NavBar';
export type AppProps = {
  version: string;
};

// export function App<: FunctionComponent>()<{}> {
//   return <button>test button</button>;
// }

// export const App: FC<AppProps> = () => {
//   return <button>test button</button>;
// };

export const App = (props: AppProps) => {
  return (
    <>
      <h1>React typescript starter app</h1>
      <NavBar />
      <button>test button</button>
    </>
  );
};
