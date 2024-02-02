import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { useContacts } from '../../hooks/useContacts';
import { addContact } from '../../redux/contacts/operations';
import { Button } from '@mui/material';

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
    <form className={css.form} onSubmit={handleAddContact}>
      <label>
        Name:
        <input
          onChange={handleChange}
          type="text"
          name="name"
          autoComplete="on"
          value={name}
          required
        />
      </label>

      <label>
        Number:
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          autoComplete="on"
          value={number}
          required
        />
      </label>

      <Button
        className={css.button}
        type="submit"
        disabled={isLoading}
        color="primary"
        size="small"
        variant="outlined"
      >
        Add contact
      </Button>
    </form>
  );
};
