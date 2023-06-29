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
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
