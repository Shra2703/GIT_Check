import "./App.css";

import Home from "./Components/Home/Home";
import ToDoForm from "./Components/ToDoForm/ToDoForm";
import ToDoList from "./Components/ToDoList/ToDoList";
import NavBar from "./Components/Navbar/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/todoStore";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", color: "green" }}>
          Choose What You Want To Do!!!
        </h1>

        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<Home />}></Route>
              <Route
                path="todo"
                element={
                  <>
                  <NavBar/>
                    <h1 style={{ textAlign: "center", color: "green" }}>
                      Todo App
                    </h1>
                    <ToDoForm />
                    <ToDoList />
                  </>
                }
              ></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
