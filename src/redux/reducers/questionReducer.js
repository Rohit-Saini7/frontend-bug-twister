import { createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  set: 1,
  queNo: 1,
};

const questionReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase('SET_SET', (state, action) => {
      state.set = action.set;
    })
    .addCase('SET_QUENO', (state, action) => {
      state.queNo = action.queNo;
    });
});

export default questionReducer;

// const questionReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case SET_SET:
//       return {
//         ...state,
//         set: action.set,
//       };
//     case SET_QUENO:
//       return {
//         ...state,
//         set: action.queNo,
//       };
//     default:
//       return state;
//   }
// };
