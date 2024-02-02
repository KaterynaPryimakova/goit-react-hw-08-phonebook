import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = store => store.app.contacts.items;
export const selectFilter = store => store.app.filter;
export const selectisLoading = store => store.app.contacts.isLoading;
export const selectError = store => store.app.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
        contact.number.includes(filter)
    );
  }
);
