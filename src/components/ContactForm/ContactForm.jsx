import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from '../../hooks/useContacts';
import { addContact } from '../../redux/contacts/operations';
import { Button, TextField, Grid } from '@mui/material';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading } = useContacts();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`There is no input with name: ${name}`);
    }
  };

  const handleAddContact = evt => {
    evt.preventDefault();

    const contactData = { name, number };

    const alreadyExist = contacts.some(
      contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
    );

    if (alreadyExist) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(contactData));

    setName('');
    setNumber('');
  };

  return (
    <Grid
      onSubmit={handleAddContact}
      component="form"
      container
      direction="column"
      alignItems="center"
      spacing={2}
      mt={2}
    >
      <Grid item xs={4}>
        <AddIcCallOutlinedIcon htmlColor="orange" fontSize="large" />
      </Grid>

      <Grid item xs={4}>
        <TextField
          onChange={handleChange}
          type="text"
          name="name"
          autoComplete="on"
          value={name}
          required
          label="Name"
          variant="outlined"
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          onChange={handleChange}
          type="tel"
          name="number"
          autoComplete="on"
          value={number}
          required
          label="Number"
          variant="outlined"
        />
      </Grid>

      <Grid item xs={4}>
        <Button
          type="submit"
          disabled={isLoading}
          color="primary"
          size="large"
          variant="outlined"
        >
          Add contact
        </Button>
      </Grid>
    </Grid>
  );
};
