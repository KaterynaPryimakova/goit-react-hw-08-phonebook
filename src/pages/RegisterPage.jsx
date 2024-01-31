import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/auth/operations';

const RegisterPage = () => {
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
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Your name:
          <input
            onChange={handleChange}
            type="text"
            name="userName"
            value={userName}
            minLength={2}
            autoComplete="on"
            required
          />
        </label>
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
          Create password:
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
    </div>
  );
};

export default RegisterPage;
