import React from "react";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Component A",
      name2: "componenet A for test",
    };
    console.log("Constructor");
    // we can't put setState here also because it is mounted yet.
  }

  static getDerivedStateFromProps() {
    // cannot use setState here to 
    console.log("Static");
   
    return null;
  }

  componentDidMount() {
    // all the side effects used here only
    console.log("didMount");
  }

  render() {
    // we can't put this.setState here because setState() inplicitly calls an render() function so it will go on to the infinite state.
    console.log("Render");
    return (
      <>
        <h1>{this.state.name}</h1>
        <h2>{this.state.name2}</h2>
      </>
    );
  }
}

export default ComponentA;
