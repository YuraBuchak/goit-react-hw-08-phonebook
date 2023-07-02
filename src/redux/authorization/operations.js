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

export const handleFulfilledRefreshing = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handlePendingRefreshing = state => {
  state.isRefreshing = true;
};

export const handleRejectedRefreshing = state => {
  state.isRefreshing = false;
};
