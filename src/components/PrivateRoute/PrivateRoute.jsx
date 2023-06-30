import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

export const PrivateRoute = ({ children }) => {
  const isToken = useSelector(selectToken);
  return isToken ? children : <Navigate to="/login" />;
};
