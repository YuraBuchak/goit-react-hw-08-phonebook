import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactsPage } from 'pages/ContactsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

// import { AddContactForm } from './AddContactForm/AddContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import css from './Phonebook.module.css';

// import { ClockLoader } from 'react-spinners';

/* // <>
    //   <div className={css.spiner}>
    //     {isLoading && !error && <ClockLoader color="#8a2be2" size={60} />}
    //   </div>

    //   <div className={css.container}>
    //     <h1 className={css.title}>Phonebook</h1>

    //     <AddContactForm />
    //     <h2 className={css.titleFilter}>Contacts</h2>
    //     <Filter />
    //     <ContactList />
    //   </div>
    // </> */
