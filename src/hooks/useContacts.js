import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectisLoading,
} from '../redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectisLoading);
  const error = useSelector(selectError);

  return {
    contacts,
    filter,
    isLoading,
    error,
  };
};
