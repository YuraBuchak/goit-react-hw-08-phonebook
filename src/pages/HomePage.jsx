import { Typography } from '@mui/material';
import phone from '../pictures/telephone.png';

const HomePage = () => {
  return (
    <>
      <Typography
        variant="h2"
        align="center"
        component="div"
        sx={{ flexGrow: 1, color: '#4a4849' }}
      >
        Welcome to our Phone Book
      </Typography>
      <img width="265px" src={phone} alt="call" />
    </>
  );
};

export default HomePage;
