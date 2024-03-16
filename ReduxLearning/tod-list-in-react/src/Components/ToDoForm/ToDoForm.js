import "./ToDoForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

const ToDoForm = (props) => {

  // this is for froms
  // let {createTodo} = props;
  const [todoText, setTodotext] = useState("");

  // for redux store
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // for props
    // createTodo(todoText);
    dispatch(addTodo(todoText))
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
