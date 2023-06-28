import { combineReducers } from '@reduxjs/toolkit';
import { contactsReduсer } from './contactsSlice/contactsSlice';
import { filterReducer } from './filterSlice/filterSlice';

export const reducer = combineReducers({
  contacts: contactsReduсer,
  filter: filterReducer,
});
