import { useDispatch } from 'react-redux';
// import { selectName } from 'redux/selectors';
import { logOutThunk } from 'redux/thunk/authThunk';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const name = useSelector(selectName);

  return (
    <div>
      <div> Welcome, </div>
      <button type="button" onClick={() => dispatch(logOutThunk())}>
        LogOut
      </button>
    </div>
  );
};
