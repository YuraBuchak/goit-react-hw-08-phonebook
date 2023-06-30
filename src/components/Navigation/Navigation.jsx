import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export const Navigation = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedin && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};