import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { useContacts } from 'hooks/useContacts';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const { isLoading } = useContacts();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li key={id} id={id}>
      <p>{name}</p>
      <p>{number}</p>
      <Button
        onClick={() => handleDeleteContact(id)}
        disabled={isLoading}
        color="primary"
        size="small"
        variant="outlined"
      >
        <DeleteOutlineIcon htmlColor="orange" fontSize="small" />
      </Button>
    </li>
  );
};
