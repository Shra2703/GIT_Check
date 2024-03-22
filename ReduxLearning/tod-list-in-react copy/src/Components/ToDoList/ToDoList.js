import "./TodoList.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/actions/todoActions";
import { action } from "../../redux/reducers/todoReducer";

const ToDoList = () => {

  // using redux we are using use selector hook so that we can directly access the state of the redux store
  const todos = useSelector((state) => state.todoReducer.todos);
  
  let dispatch = useDispatch();

  return (
    <>
      <div className="container">
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
        

            {/* <button
              onClick={() => {
                dispatch(toggleTodo(index));
              }} className="btn btn-warning"
            > */}
            <button
              onClick={() => {
                dispatch(action.toggle(index));
              }} className="btn btn-warning"
            >
              Toggle
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default ToDoList;
