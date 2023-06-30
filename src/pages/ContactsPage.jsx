import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from '../components/Phonebook.module.css';
// import { ClockLoader } from 'react-spinners';
// import { useSelector } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/selectors';

const ContactsPage = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  return (
    <>
      <div>ContactsPage</div>
      {/* <div className={css.spiner}>
        {isLoading && !error && <ClockLoader color="#8a2be2" size={60} />}
      </div> */}
      <AddContactForm />
      <h2 className={css.titleFilter}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
