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

export const handleFulfilledLogout = state => {
  state.items = [];
  state.error = '';
  state.isLoading = false;
};
