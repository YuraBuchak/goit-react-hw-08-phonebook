import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/thunk/authThunk';

export const FormLogin = () => {
  const dispatch = useDispatch();

  const handleSubmitLogin = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logInThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmitLogin} autoComplete="on">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
