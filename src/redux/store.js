import { configureStore } from '@reduxjs/toolkit';

import languageReducer from './languageSlice';
import questionReducer from './questionSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    language: languageReducer,
    question: questionReducer,
    user: userReducer,
  },
});
