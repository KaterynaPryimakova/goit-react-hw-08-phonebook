import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { Toolbar } from '@mui/material';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Toolbar component="nav">
      <StyledLink to="/">Home</StyledLink>

      {isLoggedIn ? (
        <StyledLink to="/contacts">Contacts</StyledLink>
      ) : (
        <>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Log in</StyledLink>
        </>
      )}
    </Toolbar>
  );
};
