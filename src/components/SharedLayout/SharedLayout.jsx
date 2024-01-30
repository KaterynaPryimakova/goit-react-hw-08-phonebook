import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="register">Register</NavLink>
          <NavLink to="login">Log in</NavLink>
          <NavLink to="contacts">Contacts</NavLink>
        </nav>
      </header>

      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
