import LoginPage from "./LoginPage";
import ResetPassword from "./ResetPassword";
import {useState} from "react";

function App() {
  let [form, setForm] = useState("login");
  return (
    <>
    <h1>Welcome</h1>
    {form === 'login' ? <LoginPage /> : <ResetPassword />}
    <button onClick={() => setForm(form === 'login' ? "reset" : "login")}>
      {form === 'login' ? 'Forgot Password' : "Back to Login"}
    </button>
    </>
  );
}

export default App;
