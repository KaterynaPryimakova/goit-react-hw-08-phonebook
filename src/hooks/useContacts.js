import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilter,
  selectFilteredContacts,
  selectisLoading,
} from '../redux/contacts/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectisLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  return {
    contacts,
    isLoading,
    error,
    filter,
  };
};
