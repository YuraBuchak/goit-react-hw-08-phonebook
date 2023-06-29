import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async ({ name, number }) => {
  const { data } = await axios.post('/contacts', { name, number });
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
