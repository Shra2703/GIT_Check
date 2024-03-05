import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state  = {

      paraText : false
    }
  }

  handleClick = () => {
    this.setState({
      paraText : !this.state.paraText
    })
  }

  render(){
    const {paraText} = this.state;
    return(
      <>
      <button onClick={this.handleClick}>hello</button>
      <p>{paraText ? "Hello Yrr" : null}</p>
      </>
    )
  }
}

export default App;
