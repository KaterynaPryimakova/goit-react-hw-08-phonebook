import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { useContacts } from 'hooks/useContacts';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Item } from './ContactItem.styled';
import { toast } from 'react-toastify';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const { isLoading } = useContacts();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(data => {
        toast.success(`${data.name} was successfully deleted!`);
      });
  };

  return (
    <Item key={id} id={id}>
      <p>{name}</p>
      <p>{number}</p>
      <Button
        onClick={() => handleDeleteContact(id)}
        disabled={isLoading}
        color="primary"
        size="small"
        variant="outlined"
        xs={2}
      >
        <DeleteOutlineIcon htmlColor="orange" fontSize="small" />
      </Button>
    </Item>
  );
};
