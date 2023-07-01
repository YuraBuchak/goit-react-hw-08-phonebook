import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Suspense } from 'react';
import css from '../components/Phonebook.module.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={css.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
