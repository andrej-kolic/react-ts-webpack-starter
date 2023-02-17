import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '~/components/App/NavBar';

export function Layout() {
  return (
    <div>
      <NavBar />
      <div data-testid="layout-content">
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
