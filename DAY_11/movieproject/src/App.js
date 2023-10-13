import React from "react";
import Moviecard from "./Moviecard";
import "./style.css"

function App1() {
  return (
    <>
      <h1>Movie app</h1>
      <Moviecard />
    </>
  );
}

class App extends React.Component {
  render() {
    return (
      <>
        <h1> gello class component</h1>
      </>
    );
  }
}

export default App1;
