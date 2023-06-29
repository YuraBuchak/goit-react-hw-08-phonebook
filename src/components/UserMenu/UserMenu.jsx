import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { logOutThunk } from 'redux/thunk/authThunk';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      <div> Welcome, {user.name} </div>
      <button type="button" onClick={() => dispatch(logOutThunk())}>
        LogOut
      </button>
    </div>
  );
};
