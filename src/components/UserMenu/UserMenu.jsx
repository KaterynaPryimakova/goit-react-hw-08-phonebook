import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Button, Grid, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

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
        <Typography paragraph variant="button" mb={0}>
          {user}
        </Typography>
        <Button
          onClick={handleLogout}
          disabled={isLoading}
          type="button"
          size="small"
          variant="text"
        >
          <LogoutIcon htmlColor="orange" />
        </Button>
      </Grid>
    </div>
  );
};
