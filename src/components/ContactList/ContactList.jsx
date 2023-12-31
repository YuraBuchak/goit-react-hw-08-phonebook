import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'redux/thunk/contactThunk';
import { useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';

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
      <Grid container spacing={2}>
        {filteredContacts.length ? (
          filteredContacts.map(contact => (
            <Grid item xs={6} sm={6} md={6} key={contact.id}>
              <ContactItem contact={contact} />
            </Grid>
          ))
        ) : (
          <Typography
            variant="h5"
            align="center"
            component="div"
            sx={{ flexGrow: 1, color: '#4a4849' }}
          >
            No contacts...
          </Typography>
        )}
      </Grid>
    </Box>
  );
};
