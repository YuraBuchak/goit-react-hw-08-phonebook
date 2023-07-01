import css from '../Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContactThunk, getContactsThunk } from 'redux/thunk/contactThunk';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export const AddContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmitForm = async event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const normalizeName = name.toLowerCase().trim();
    const isContact = contacts.find(
      contact => contact.name.toLowerCase().trim() === normalizeName
    );

    if (isContact) {
      alert(`${name} was added earlyer`);
      return;
    }

    await dispatch(addContactThunk({ name, number }));
    await dispatch(getContactsThunk());
    Notify.success(`Contact ${name} added`);
    event.target.reset();
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmitForm}
      className={css.addForm}
    >
      <TextField
        required
        label="Name"
        type="text"
        variant="outlined"
        name="name"
        size="small"
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />

      <TextField
        required
        label="Number"
        type="tel"
        variant="outlined"
        name="number"
        size="small"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ width: '200px', margin: 'auto' }}
      >
        Add contact
      </Button>
    </form>
  );
};
