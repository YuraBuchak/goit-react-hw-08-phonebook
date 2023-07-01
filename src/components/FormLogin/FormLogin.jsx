import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInThunk } from 'redux/thunk/authThunk';
import css from '../../components/Phonebook.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitLogin = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logInThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        navigate('/');
        Notify.success(`Welcome`);
      })
      .catch(error => {
        Notify.failure(`Invalid email or password. Please, try again!`);
        form.reset();
      });
  };

  return (
    <form onSubmit={handleSubmitLogin} autoComplete="on" className={css.form}>
      <TextField
        required
        label="Email"
        type="email"
        variant="outlined"
        name="email"
        size="small"
      />
      <TextField
        required
        label="Password"
        type="password"
        variant="outlined"
        name="password"
        size="small"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ width: '100px', margin: 'auto' }}
      >
        Log In
      </Button>
    </form>
  );
};
