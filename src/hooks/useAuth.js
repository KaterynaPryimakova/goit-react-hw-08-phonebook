import { useSelector } from 'react-redux';
import {
  selectToken,
  selectError,
  selectUserData,
  selectIsLoading,
  selectIsLoggedIn,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const token = useSelector(selectToken);
  const error = useSelector(selectError);
  const userData = useSelector(selectUserData);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return {
    token,
    error,
    userData,
    isLoading,
    isLoggedIn,
  };
};
