import { Outlet } from 'react-router-dom';
import { NavBar } from '~/components/NavBar';

export function Root() {
  return (
    <div>
      <h1>React typescript starter app</h1>
      <NavBar />
      <div id="content">
        <Outlet />
      </div>
    </div>
  );
}
