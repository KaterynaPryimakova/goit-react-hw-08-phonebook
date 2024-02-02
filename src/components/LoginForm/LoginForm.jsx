import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <form onSubmit={handleSubmit}>
      <label>
        Your email:
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          autoComplete="on"
          required
        />
      </label>
      <label>
        Password:
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          minLength={6}
          autoComplete="on"
          required
        />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
};
