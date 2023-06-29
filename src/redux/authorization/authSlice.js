import { logInThunk, logOutThunk, registerThunk } from 'redux/thunk/authThunk';

const { createSlice } = require('@reduxjs/toolkit');

export const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const handleFulfilledRegistration = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleFulfilledLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, handleFulfilledRegistration)
      .addCase(logInThunk.fulfilled, handleFulfilledLogin)
      .addCase(logOutThunk.fulfilled, handleFulfilledLogout)
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => state
      ),
});

export const authReducer = authSlice.reducer;
