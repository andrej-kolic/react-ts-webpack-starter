import { Outlet } from 'react-router-dom';
import { NavBar } from '~/components/App/NavBar';

export function Layout() {
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
