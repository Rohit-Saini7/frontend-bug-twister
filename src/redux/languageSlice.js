import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: null,
    confirm: false,
  },
  reducers: {
    setLanguage: (state, action) => {
      return { ...state, language: action.language };
    },
    setLanguageConfirmation: (state, action) => {
      return { ...state, confirm: action.status };
    },
  },
});

export const { setLanguage, setLanguageConfirmation } = languageSlice.actions;

export default languageSlice.reducer;
