import { useEffect, useState } from "react";
// useState is the hook which takes 2 argument
// 1st argument is same like that we define in the this.state variable to set the value
// 2nd argument is like the setState to assign the updated value in the firstArgument.

const InputExercsieUseState = () => {
  const [firstName, setFirstName] = useState("Harry"); // useState contains the value which is used to store in the firstName intitally and setFirstName will assign with the updated value in the firstName

  const [lastName, setLastName] = useState("potter");

  //   changing the title using sideeffects with the help useEfect();
  // Syntax
  //   working as a component didMount with the square brackets #1
  useEffect(() => {
    document.title = firstName + " " + lastName;
  }, []);

  //   will update only when there is a change in the lastName
  useEffect(() => {
    document.title = firstName + " " + lastName;
  }, [lastName]);

  //   without square brackets works like component did mount and component did update #3
  useEffect(() => {
    document.title = firstName + " " + lastName;
  });


  // trying to use multiple side-effects
  useEffect(()=>{
    let timer = setInterval(()=>{
      console.log("Window width", window.innerWidth)
    },2000)

    return(clearInterval(timer))
  })
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
