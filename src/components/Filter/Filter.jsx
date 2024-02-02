import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';
import { useContacts } from 'hooks/useContacts';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useContacts();

  const handleFindContact = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name:
      <input
        onChange={handleFindContact}
        type="text"
        name="search"
        autoComplete="on"
        value={filter}
      />
    </label>
  );
};
