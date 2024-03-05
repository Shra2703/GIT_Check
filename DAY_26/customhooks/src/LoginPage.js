import { useState, useEffect } from "react";
// this is the custom hook which is made manually
import useLocalstorage from "./useLocalstorage";

const LoginPage = () => {
    const [password, setpassword] = useState("");
//   const [email, setEmail] = useState("");
//   useEffect(() =>{
//     let emailLS = localStorage.getItem("email")
//     if(emailLS) setEmail(emailLS)
//   },[])

//   useEffect(() => {
//     localStorage.setItem("email", email)
//   }, [email])

// destructing the object from the custom hook
const {email, setEmail} = useLocalstorage("");

  return (
    <>
      <h1>Welcome to the login page</h1>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <br />
      <button>Login</button>
      <br />
    </>
  );
};

export default LoginPage;
