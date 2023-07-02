import { Button, Chip } from '@mui/material';
import { Confirm, Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectName } from 'redux/selectors';
import { logOutThunk } from 'redux/thunk/authThunk';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);

  const logOut = () => {
    Confirm.show(
      'Log Out',
      `Do you want to log out?`,
      'Yes',
      'No',
      async () => {
        dispatch(logOutThunk());
        Notify.success(`Log out`);
      },
      async () => {
        Notify.failure('Сanceled log out');
        return;
      }
    );
  };

  return (
    <div>
      <Chip sx={{ color: 'white' }} label={`Welcome, ${name}`} />
      <Button type="button" onClick={logOut} color="inherit">
        Log Out
      </Button>
    </div>
  );
};
