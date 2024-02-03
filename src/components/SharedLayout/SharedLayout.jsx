import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Navigation, UserMenu } from 'components';
import { AppBar, Grid, Toolbar } from '@mui/material';
import { Container } from '@mui/material';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <AppBar component="header" position="static">
        <Toolbar disableGutters>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Navigation />
            {isLoggedIn && <UserMenu />}
          </Grid>
        </Toolbar>
      </AppBar>

      <main>
        <Container fixed>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </div>
  );
};
