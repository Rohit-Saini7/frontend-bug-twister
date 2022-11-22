import { createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  user: null,
};

const userReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase('SET_USER', (state, action) => {
    state.user = action.user;
  });
});

export default userReducer;
