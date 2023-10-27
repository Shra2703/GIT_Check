import { useEffect, useState } from "react";

const InputExercsieUseState = () => {
  let [value, setValue] = useState(0);

  //   changing the title
  useEffect(() => {
    document.title = value;
  });

  return (
    <>
      <h1>Increment, Decrement counter</h1>
      <h2>{value}</h2>
      <div>
        <button onClick={() => setValue((value += 1))}>Increment</button>

        <button onClick={() => setValue((value -= 1))}>Decrement</button>
      </div>
    </>
  );
};

export default InputExercsieUseState;
