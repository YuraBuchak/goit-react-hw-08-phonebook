import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import css from '../Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/thunk/contactThunk';
import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterContactsInput = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filteredContacts = filterContactsInput();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {filteredContacts.length ? (
          <ul className={css.listContacts}>
            {filteredContacts.map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </ul>
        ) : (
          <p className={css.labelFilter}>No contacts!</p>
        )}
      </Grid>
    </Box>
  );
};
