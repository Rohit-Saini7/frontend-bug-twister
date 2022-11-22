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

// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case SET_USER:
//       return {
//         ...state,
//         user: action.user,
//       };
//     default:
//       return state;
//   }
// };
