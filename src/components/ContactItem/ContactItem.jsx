import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from '../Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk, getContactsThunk } from 'redux/thunk/contactThunk';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, number, id, photo } = contact;

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
      <div className={css.avatarWrapper}>
        <img src={photo} alt="avatar" className={css.avatar} />
      </div>

      <div className={css.contactWrapper}>
        <span className={css.contactName}>{name}:</span>
        <span className={css.number}>{number}</span>
      </div>

      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteUpdateContacts)}
      >
        X
      </button>
    </li>
  );
};
