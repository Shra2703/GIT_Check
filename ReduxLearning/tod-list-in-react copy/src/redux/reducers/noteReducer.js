import { createSlice } from "@reduxjs/toolkit";
import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";
import { action } from "./todoReducer";

const initialState = {
  notes: [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      text: "Ullam porro ex similique ea voluptas debitis vel odit nam sint amet.",
    },
  ],
};

const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.notes.push({
        text: action.payload,
      });
    },
    delete: (state, action) => {
      state.notes.slice(action.payload, 1);
    },
  },
});

// function noteReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [
//           ...state.notes,
//           {
//             text: action.text,
//             createOn: new Date()
//           },
//         ],
//       };
//     case DELETE_NOTE:
//         state.notes.splice(action.index, 1);
//         return{
//             ...state,
//             notes: [...state.notes]
//   }
//     default:
//       return state;
//   }
// }

const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;
export default noteReducer;
