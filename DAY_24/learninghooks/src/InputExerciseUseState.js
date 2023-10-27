import { useState } from "react";
// useState is the hook which takes 2 argument
// 1st argument is same like that we define in the this.state variable to set the value
// 2nd argument is like the setState to assign the updated value in the firstArgument.

const InputExercsieUseState = () => {
  const [firstName, setFirstName] = useState(""); // useState contains the value which is used to store in the firstName intitally and setFirstName will assign with the updated value in the firstName

  const [lastName, setLastName] = useState("");
  return (
    <>
      <h1>Input field exercsie in useState()</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your first name "
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your last name "
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        Hello {firstName}, {lastName}
      </div>
    </>
  );
};

export default InputExercsieUseState;
