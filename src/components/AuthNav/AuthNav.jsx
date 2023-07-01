import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">
        <Button sx={{ color: 'white' }}>Sign Up</Button>
      </NavLink>
      <NavLink to="/login">
        <Button sx={{ color: 'white' }}>Log In</Button>
      </NavLink>
    </div>
  );
};
