import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from '../Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk, getContactsThunk } from 'redux/thunk/contactThunk';
import userPhoto from '../../pictures/user.png';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, number, id } = contact;

  const deleteUpdateContacts = async () => {
    Confirm.show(
      'DELETE CONTACT',
      `Do you want to delete contact ${name}?`,
      'Yes',
      'No',
      async () => {
        await dispatch(deleteContactThunk(id));
        await dispatch(getContactsThunk());
        Notify.success(`Contact ${name} deleted`);
      },
      async () => {
        Notify.failure('If you say so...');
        return;
      }
    );
  };

  return (
    <li className={css.listItem}>
      <Grid container spacing={2}>
        <Grid item xs={3} sm={2} md={2}>
          <div className={css.avatarWrapper}>
            <img src={userPhoto} alt="avatar" className={css.avatar} />
          </div>
        </Grid>
        <Grid item xs={7} sm={8} md={8}>
          <div className={css.contactWrapper}>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, color: '#4a4849' }}
            >
              {name}:
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, color: '#4a4849' }}
            >
              {number}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={2} sm={2} md={2}>
          <Button
            color="error"
            variant="outlined"
            sx={{ width: '100%' }}
            onClick={() => dispatch(deleteUpdateContacts)}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </li>
  );
};
