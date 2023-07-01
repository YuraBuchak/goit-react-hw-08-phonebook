const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');
const { selectToken } = require('redux/selectors');

export const PublicRoute = ({ children }) => {
  const isToken = useSelector(selectToken);
  return !isToken ? children : <Navigate to="/" />;
};
