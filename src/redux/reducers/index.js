import { combineReducers } from 'redux';
import languageReducer from './languageReducer';
import questionReducer from './questionReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userState: userReducer,
  languageState: languageReducer,
  questionState: questionReducer,
});

export default rootReducer;
