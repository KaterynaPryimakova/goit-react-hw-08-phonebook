import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Button, Grid } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userData, isLoading } = useAuth();
  const user = userData?.name ?? 'Couldn`t get the user.';

  const handleLogout = e => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <p>{user}</p>
        <Button
          onClick={handleLogout}
          disabled={isLoading}
          type="button"
          size="small"
          variant="contained"
        >
          Logout
        </Button>
      </Grid>
    </div>
  );
};
