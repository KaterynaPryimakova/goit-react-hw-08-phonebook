import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';
import { selectIsLoading, selectUserData } from '../../redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const userEmail = userData?.email && 'Couldn`t get the user email.';
  const isLoading = useSelector(selectIsLoading);

  const handleLogout = e => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogout} disabled={isLoading} type="button">
        Logout
      </button>
    </div>
  );
};
