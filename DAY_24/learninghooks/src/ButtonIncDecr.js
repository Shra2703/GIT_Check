import { useState } from "react";

const InputExercsieUseState = () => {
  let [increment, setIncr] = useState(0);

  let [decrement, setDecr] = useState(0);
  return (
    <>
      <h1>Increment, Decrement counter</h1>
      <div>
        <button onClick={() => setIncr((increment += 1))}>Increment</button>
        {increment}
        <button onClick={() => setDecr((decrement -= 1))}>Decrement</button>
        {decrement}
      </div>
    </>
  );
};

export default InputExercsieUseState;
