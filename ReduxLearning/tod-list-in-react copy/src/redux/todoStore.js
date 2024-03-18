import * as redux from "redux";
import todoReducer from "./reducers/todoReducer";
import noteReducer from "./reducers/noteReducer";
import { combineReducers } from "redux";


// We are using simgle store for multiple reducrers
const result = combineReducers({
  noteReducer,
  todoReducer,
});

export const store = redux.createStore(result);
