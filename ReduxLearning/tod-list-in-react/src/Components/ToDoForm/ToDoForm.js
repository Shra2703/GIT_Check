import "./ToDoForm.css";
import { useState } from "react";

const ToDoForm = ({ createTodo }) => {
  const [todoText, setTodotext] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(todoText);
    setTodotext("");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodotext(e.target.value)}
          />
        <button type="submit">Create Todo</button>
        </form>
      </div>
    </>
  );
};

export default ToDoForm;
