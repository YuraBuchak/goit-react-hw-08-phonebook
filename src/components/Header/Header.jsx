import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export const Header = () => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return (
    <>
      <Navigation />
      {isLoggedin ? <UserMenu /> : <AuthNav />}
    </>
  );
};
