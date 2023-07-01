import { Confirm, Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
// import { selectName } from 'redux/selectors';
import { logOutThunk } from 'redux/thunk/authThunk';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const name = useSelector(selectName);

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
      <div> Welcome, </div>
      <button type="button" onClick={logOut}>
        LogOut
      </button>
    </div>
  );
};
