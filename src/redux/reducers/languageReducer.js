import { createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  language: null,
  confirm: false,
};

const languageReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase('SET_LANGUAGE', (state, action) => {
      state.language = action.language;
    })
    .addCase('SET_LANGUAGE_CONFIRMATION', (state, action) => {
      state.confirm = action.status;
    });
});

export default languageReducer;
