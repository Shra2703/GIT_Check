import "./TodoList.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/actions/todoActions";

const ToDoList = (props) => {
  // using props
  // let {onToggle } = props;

  // using redux we are using use selector hook so that we can directly access the state of the redux store
  const todos = useSelector((state) => state.todos);
  // console.log(todos[0].text);
  let dispatch = useDispatch();

  return (
    <>
      <div className="container">
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "pending"}
            </span>
            {/* <button
              onClick={() => {
                onToggle(index);
              }}
            >
              Toggle
            </button> */}

            <button
              onClick={() => {
                dispatch(toggleTodo(index));
              }}
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
