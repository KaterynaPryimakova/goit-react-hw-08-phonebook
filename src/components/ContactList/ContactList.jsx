import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from '../../hooks/useContacts';

import { fetchContacts } from '../../redux/contacts/operations';
import { ContactItem } from 'components';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length > 0 && (
        <p>The contacts list is empty, add your first contacts</p>
      )}
      {contacts.length > 0 && isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {contacts && contacts.length > 0 && (
        <ul className={css.list}>
          {contacts.map(({ name, number, id }) => {
            return <ContactItem name={name} number={number} id={id} key={id} />;
          })}
        </ul>
      )}
    </>
  );
};
