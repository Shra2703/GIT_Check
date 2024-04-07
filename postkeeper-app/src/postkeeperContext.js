import { createContext, useContext, useState } from "react";
import React from "react";

const postContext = createContext();

export function useCustomContext() {
  let value = useContext(postContext);
  return value;
}

function PostkeeperContext({ children }) {
  const [countSavedPost, setcountSavedPost] = useState(0);
  const [mySavedPost, setMysavedPost] = useState([]);

  
  const setSavedPost = () => {
    setcountSavedPost((prev) => prev + 1);
  };

  const resetFunctionality = () => {
    setcountSavedPost(0);
  };

  return (
    <>
      <postContext.Provider
        value={{ countSavedPost, setSavedPost, resetFunctionality }}
      >
        {children}
      </postContext.Provider>
    </>
  );
}

export default PostkeeperContext;
