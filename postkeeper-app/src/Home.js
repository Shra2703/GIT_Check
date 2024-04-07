import React from "react";
import { useCustomContext } from "./postkeeperContext";

function Home() {
  let { setSavedPost } = useCustomContext();
  return (
    <div>
        
      <button onClick={setSavedPost}>
        {" "}
        click me
      </button>
    </div>
  );
}

export default Home;
