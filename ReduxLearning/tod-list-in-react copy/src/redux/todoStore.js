import * as redux from "redux";
import todoReducer from "./reducers/todoReducer";
import noteReducer from "./reducers/noteReducer";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// this is by redux-tool-kit
export const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
  },
});
// this is by react-redux

// We are using simgle store for multiple reducrers
// const result = combineReducers({
//   noteReducer,
//   todoReducer,
// });

// export const store = redux.createStore(result);
