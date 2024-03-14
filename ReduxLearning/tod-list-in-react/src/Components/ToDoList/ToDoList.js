import "./TodoList.css";
import { useState } from "react";

const ToDoList = ({ todos, onToggle }) => {
  return (
    <>
      <div className="container">
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "pending"}
            </span>
            <button onClick={() => {
                onToggle(index)
            }}>Toggle</button>
          </li>
        ))}
      </div>
    </>
  );
};

export default ToDoList;
