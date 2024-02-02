import React from 'react';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { useContacts } from 'hooks/useContacts';
import { Button } from '@mui/material';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const { isLoading } = useContacts();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li key={id} className={css.item} id={id}>
      <p>{name}</p>
      <p>{number}</p>
      <Button
        onClick={() => handleDeleteContact(id)}
        className={css.button}
        disabled={isLoading}
        color="primary"
        size="small"
        variant="outlined"
      >
        Delete
      </Button>
    </li>
  );
};
