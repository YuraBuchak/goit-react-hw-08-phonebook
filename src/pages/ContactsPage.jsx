import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from '../components/Phonebook.module.css';
import { Typography } from '@mui/material';

const ContactsPage = () => {
  return (
    <>
      <Typography
        variant="h2"
        align="center"
        component="div"
        sx={{ flexGrow: 1, color: '#4a4849' }}
      >
        Contacts
      </Typography>

      <AddContactForm />
      <Typography
        variant="h4"
        align="center"
        component="div"
        sx={{ flexGrow: 1, color: '#4a4849', margin: '10px 30px' }}
      >
        Serch contact
      </Typography>
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsPage;
