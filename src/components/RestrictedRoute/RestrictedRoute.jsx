import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
};
