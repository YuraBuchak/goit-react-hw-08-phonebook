import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/thunk/authThunk';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const FormRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitRegister = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      registerThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        navigate('/');
        Notify.success(`Registration is successful. Welcome!`);
      })
      .catch(error => {
        Notify.failure(`Ooops, Registration is not successful. Try again!`);
        form.reset();
      });
    form.reset();
  };
  return (
    <form onSubmit={handleSubmitRegister} autoComplete="on">
      <TextField
        required
        label="Name"
        type="text"
        variant="outlined"
        name="name"
        size="small"
      />
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
      <Button type="submit" variant="contained">
        Sign Up
      </Button>
    </form>
  );
};
