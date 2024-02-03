import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Button, TextField, Grid } from '@mui/material';
import { LoginOutlined } from '@mui/icons-material';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading } = useAuth();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`There is no input with name: ${name}`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(loginUser(userData));
  };
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Grid
          onSubmit={handleSubmit}
          component="form"
          container
          direction="column"
          alignItems="center"
          spacing={2}
          mt={2}
        >
          <Grid item xs={4}>
            <LoginOutlined htmlColor="orange" fontSize="large" />
          </Grid>
          <Grid item xs={4}>
            <TextField
              onChange={handleChange}
              type="email"
              name="email"
              value={email}
              minLength={7}
              autoComplete="on"
              required
              label="Your email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              onChange={handleChange}
              type="password"
              name="password"
              value={password}
              minLength={7}
              autoComplete="on"
              required
              label="Password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              type="submit"
              color="primary"
              size="large"
              variant="outlined"
            >
              Log in
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};
