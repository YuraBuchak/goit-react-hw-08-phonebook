import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/thunk/authThunk';

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
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
