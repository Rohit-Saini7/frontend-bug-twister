import { createSlice } from '@reduxjs/toolkit';

export const questionSlice = createSlice({
  name: 'question',
  initialState: { set: 1, questionNumber: 1 },
  reducers: {
    setSet: (state, action) => {
      return { ...state, set: action.set };
    },
    setQuestionNumber: (state, action) => {
      return { ...state, questionNumber: action.questionNumber };
    },
  },
});

export const { setSet, setQuestionNumber } = questionSlice.actions;

export default questionSlice.reducer;
