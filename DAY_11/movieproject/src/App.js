import React from "react";
import MovieList from "./MovieList";
import "./style.css"
import Navbar from "./Navbar";

function App1() {
  return (
    <>
      <Navbar />
      <MovieList />
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
