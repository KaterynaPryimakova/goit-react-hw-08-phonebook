import { ContactForm, ContactList, Filter } from 'components';
import React from 'react';

const ContactsPage = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
