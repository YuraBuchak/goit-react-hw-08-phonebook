import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import Button from '@mui/material/Button';

export const Navigation = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">
        <Button sx={{ color: 'white' }}>Home</Button>
      </NavLink>
      {isLoggedin && (
        <NavLink to="/contacts">
          <Button sx={{ color: 'white' }}>Contacts</Button>
        </NavLink>
      )}
    </nav>
  );
};
