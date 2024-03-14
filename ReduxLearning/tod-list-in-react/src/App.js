import "./App.css";
import { useState } from "react";
import ToDoForm from "./Components/ToDoForm/ToDoForm";
import ToDoList from "./Components/ToDoList/ToDoList";
import { store } from "./redux/todoStore";
import { Provider } from "react-redux";

function App() {
  const [todos, setTodo] = useState([]);

  const createTodo = (text) => {
    setTodo([...todos, { id: todos.length + 1, text: text, completed: false }]);
    console.log(todos);
  };

  const onToggle = (index) => {
    const list = [...todos];
    list[index].completed = !list[index].completed;
    setTodo(list);
  };

  return (
    <>
      <div>
        <h1>Todo App</h1>
        {/* this is for props */}
        {/* <ToDoForm createTodo = {createTodo}/>
        <ToDoList todos = {todos} onToggle = {onToggle}/> */}

        <Provider store={store}>
          <ToDoForm createTodo={createTodo} />
          <ToDoList todos={todos} onToggle={onToggle} />
        </Provider>
      </div>
    </>
  );
}

export default App;
