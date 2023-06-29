import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/thunk/authThunk';

export const FormRegister = () => {
  const dispatch = useDispatch();

  const handleSubmitRegister = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      registerThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
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
