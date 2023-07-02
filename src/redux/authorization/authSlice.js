import {
  logInThunk,
  logOutThunk,
  refreshingThunk,
  registerThunk,
} from 'redux/thunk/authThunk';
import {
  handleFulfilledLogin,
  handleFulfilledLogout,
  handleFulfilledRefreshing,
  handleFulfilledRegistration,
  handlePendingRefreshing,
  handleRejectedRefreshing,
} from './operations';

const { createSlice } = require('@reduxjs/toolkit');

export const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, handleFulfilledRegistration)
      .addCase(logInThunk.fulfilled, handleFulfilledLogin)
      .addCase(logOutThunk.fulfilled, handleFulfilledLogout)
      .addCase(refreshingThunk.pending, handlePendingRefreshing)
      .addCase(refreshingThunk.fulfilled, handleFulfilledRefreshing)
      .addCase(refreshingThunk.rejected, handleRejectedRefreshing),
});

export const authReducer = authSlice.reducer;
