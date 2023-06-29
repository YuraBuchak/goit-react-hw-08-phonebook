import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Suspense } from 'react';
import { Loading } from 'notiflix';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={Loading}>
        <Outlet />
      </Suspense>
    </>
  );
};
