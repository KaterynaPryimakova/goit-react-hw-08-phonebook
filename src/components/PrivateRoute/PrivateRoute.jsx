import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ children, redirectTo = '/contacts' }) => {
  const { isLoggeIn } = useAuth();
  return isLoggeIn ? children : <Navigate to={redirectTo} replace />;
};
