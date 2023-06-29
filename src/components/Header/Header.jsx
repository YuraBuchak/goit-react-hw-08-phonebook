import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  return (
    <>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </>
  );
};
