import { Typography } from '@mui/material';
import { FormRegister } from 'components/FormRegister/FormRegister';

const RegisterPage = () => {
  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        component="div"
        sx={{ flexGrow: 1, color: '#4a4849' }}
      >
        Sign Up
      </Typography>
      <FormRegister />
    </div>
  );
};

export default RegisterPage;
