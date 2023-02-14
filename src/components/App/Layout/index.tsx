import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '~/components/App/NavBar';

export function Layout() {
  return (
    <div>
      <h1>React typescript starter app</h1>
      <NavBar />
      <div id="content">
        <Suspense
          fallback={
            <p>
              <span style={{ backgroundColor: 'red' }}>Loading...</span>
            </p>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
