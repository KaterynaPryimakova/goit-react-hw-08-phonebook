import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const RestrictedRoute = ({ children }) => {
  const isLoggeIn = useSelector(selectIsLoggedIn);

  return isLoggeIn ? <Navigate to="/contacts" replace /> : children;
};
