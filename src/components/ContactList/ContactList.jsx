import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from '../../hooks/useContacts';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactItem } from 'components';
import { Grid } from '@mui/material';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length === 0 && (
        <p>The contacts list is empty, add your first contacts</p>
      )}
      {contacts.length > 0 && isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {contacts && contacts.length > 0 && (
        <Grid
          component="ul"
          container
          wrap="wrap"
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {contacts.map(({ name, number, id }) => {
            return (
              <Grid key={id} item xs={4}>
                <ContactItem name={name} number={number} id={id} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};
