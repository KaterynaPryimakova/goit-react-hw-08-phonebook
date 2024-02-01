import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLoggeIn = useSelector(selectIsLoggedIn);
  return isLoggeIn ? children : <Navigate to={redirectTo} replace />;
};
