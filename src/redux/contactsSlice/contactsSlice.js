import { getContactsThunk } from 'redux/thunk/contactThunk';

const { createSlice } = require('@reduxjs/toolkit');

export const contactsInitialState = {
  items: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  isLoading: false,
  error: null,
};

export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleFulfilledContacts = (state, { payload }) => {
  state.items = payload;
  state.error = '';
  state.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledContacts)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReduсer = contactsSlice.reducer;
