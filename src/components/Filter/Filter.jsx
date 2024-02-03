import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';
import { useContacts } from 'hooks/useContacts';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useContacts();

  const handleFindContact = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <TextField
      onChange={handleFindContact}
      type="text"
      name="search"
      autoComplete="on"
      value={filter}
      label="Find contacts:"
      variant="standard"
    />
  );
};
