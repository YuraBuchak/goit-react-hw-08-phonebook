import { Typography } from '@mui/material';
import { FormLogin } from 'components/FormLogin/FormLogin';

const LoginPage = () => {
  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        component="div"
        sx={{ flexGrow: 1, color: '#4a4849' }}
      >
        Log In
      </Typography>
      <FormLogin />
    </div>
  );
};

export default LoginPage;
