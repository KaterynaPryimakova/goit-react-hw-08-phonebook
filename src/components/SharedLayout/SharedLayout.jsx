import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Navigation, UserMenu } from 'components';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <header>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </header>

      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
