import React from "react";
import MovieList from "./MovieList";
import "./style.css"

function App1() {
  return (
    <>
      <h1>Movie app</h1>
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
