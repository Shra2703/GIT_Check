import { createSlice } from "@reduxjs/toolkit";
import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
import react from "react";

const initialState = {
  todos: [
    {
      text: "Wake up at 7: 30",
      completed: false,
    },
    { text: "Do exercise for 1 hour", completed: false },
  ],
};

// by the help of redux toolkit
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // this is the add action
    add: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });
    },
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
});

// this is code for react-redux library
// export default function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false,
//           },
//         ],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, i) => {
//           if (i === action.index) {
//             todo.completed = !todo.completed;
//           }
//           return todo
//         }),
//       };
//     default:
//       return state;
//   }
// }

export const action = todoSlice.actions;


 const todoReducer = todoSlice.reducer;
 export default todoReducer;
