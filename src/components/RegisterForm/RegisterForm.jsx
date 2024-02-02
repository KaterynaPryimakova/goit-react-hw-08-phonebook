import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';
import { Button, TextField, Grid } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'userName':
        setName(value);
        break;

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
    const userData = { name: userName, email, password };
    dispatch(registerUser(userData));
  };

  return (
    <Grid
      onSubmit={handleSubmit}
      component="form"
      container
      direction="column"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={8}>
        <TextField
          onChange={handleChange}
          type="text"
          name="userName"
          value={userName}
          minLength={2}
          autoComplete="on"
          required
          id="outlined-basic"
          label="Your name"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          autoComplete="on"
          required
          id="outlined-basic"
          label="Your email"
          variant="outlined"
        />
      </Grid>

      <Grid item xs={5}>
        <TextField
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          minLength={8}
          autoComplete="on"
          required
          id="outlined-basic"
          label="Password:"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={5}>
        <Button type="submit" color="primary" size="small" variant="outlined">
          Sign up
        </Button>
      </Grid>
    </Grid>
  );
};
