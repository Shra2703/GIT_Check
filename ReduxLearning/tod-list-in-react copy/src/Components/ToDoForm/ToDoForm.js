import "./ToDoForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

const ToDoForm = () => {

  // this is for froms
  const [todoText, setTodotext] = useState("");

  // for redux store
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoText))
    setTodotext("");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            value={todoText}
            onChange={(e) => setTodotext(e.target.value)}
          />
        <button type="submit" className="btn btn-success float-end">Create Todo</button>
        </form>
      </div>
    </>
  );
};

export default ToDoForm;
