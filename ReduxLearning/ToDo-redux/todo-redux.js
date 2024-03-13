// redux in plain javascript

const redux = require("redux");

// Actions
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Actions creators
const addTodo = (text) => ({ text, type: ADD_TODO });
const toggleTodo = (index) => ({ index, type: TOGGLE_TODO });

// Intial State
const initialState = {
  todos: [],
};

// Reducers
// must return updated state
function todoReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        // ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        // ...state,
        todos: state.todos.map((todo, i) => {
          if (i === action.index) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

// Creating Store
const store = redux.createStore(todoReducers);

// distach actions
store.dispatch(addTodo("Wake at 7:15"));
store.dispatch(addTodo("Office at 7:15"));
store.dispatch(toggleTodo(0));

// Read data from store.
console.log(store.getState());
