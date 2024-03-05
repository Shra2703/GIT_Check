import { useState, useEffect } from "react";
import useLocalstorage from "./useLocalstorage";

const ResetPassword = () => {
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     let emailLS = localStorage.getItem("email");

//     if (emailLS) setEmail(emailLS);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("email", email);
//   }, [email]);

const {email, setEmail} = useLocalstorage("");

  return (
    <>
      <h1>Reset your password</h1>
      <input
        type="email"
        value={email}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Continue</button>
    </>
  );
};

export default ResetPassword;
