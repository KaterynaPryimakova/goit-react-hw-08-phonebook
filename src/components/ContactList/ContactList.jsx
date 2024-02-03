import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from '../../hooks/useContacts';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactItem } from 'components';
import { List } from './ContactList.styled';
import emptyList from '../../images/empty-list.jpg';
import { Backdrop, CircularProgress } from '@mui/material';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length === 0 && !isLoading && (
        <img src={emptyList} alt="No data" width="334" />
      )}
      {contacts.length > 0 && isLoading && (
        <Backdrop
          sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      {error && <p>{error}</p>}

      {contacts && contacts.length > 0 && (
        <List>
          {contacts.map(({ name, number, id }) => {
            return <ContactItem key={id} name={name} number={number} id={id} />;
          })}
        </List>
      )}
    </>
  );
};
