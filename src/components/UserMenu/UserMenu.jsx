import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userData, isLoading } = useAuth();
  const user = userData?.name ?? 'Couldn`t get the user name.';

  const handleLogout = e => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <p>Welcome {user}!</p>
      <button onClick={handleLogout} disabled={isLoading} type="button">
        Logout
      </button>
    </div>
  );
};
