// this is the custom hook which is made for the purpose for the code reusability the same potion of the code we are using in the reset password and the login page that's why we made a hook of it

import { useState, useEffect } from "react";

const useLocalstorage = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    let emailLS = localStorage.getItem("email");
    if (emailLS) setEmail(emailLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  //   if we want to use it then we have to return it as well
  return { email, setEmail };
};

export default useLocalstorage;
