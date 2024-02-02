import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ children }) => {
  const { isLoggeIn } = useAuth();
  return isLoggeIn ? <Navigate to="/contacts" replace /> : children;
};
