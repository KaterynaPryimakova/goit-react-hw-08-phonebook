import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { PrivateRoute, RestrictedRoute, SharedLayout } from 'components';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
