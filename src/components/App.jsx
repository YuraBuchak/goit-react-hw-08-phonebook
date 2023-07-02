import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing, selectToken } from 'redux/selectors';
import { lazy, useEffect } from 'react';
import { logOutThunk, refreshingThunk } from 'redux/thunk/authThunk';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isToken = useSelector(selectToken);

  useEffect(() => {
    if (isToken) {
      dispatch(refreshingThunk())
        .unwrap()
        .catch(() => dispatch(logOutThunk()));
    }
  }, [dispatch, isToken]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    )
  );
};

// import { ClockLoader } from 'react-spinners';
/* // <>
    //   <div className={css.spiner}>
    //     {isLoading && !error && <ClockLoader color="#8a2be2" size={60} />}
    //   </div>
    // </> */
