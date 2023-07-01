import { Typography } from '@mui/material';
import phone from '../pictures/telephone.png';
import css from '../components/Phonebook.module.css';

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
      <div className={css.homeImg}>
        <img width="265px" src={phone} alt="call" />
      </div>
    </>
  );
};

export default HomePage;
