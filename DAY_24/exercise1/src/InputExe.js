import React from "react";
// changling the div simultaneously
class InputExe extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  handleFirstName = (e) => {
    this.setState({
      firstName : e.target.value
    })
  }
  handleLastName = (e) => {
    this.setState({
      lastName : e.target.value
    })
  }

  render() {
    return (
      <>
        <div>
          <input type="text" placeholder="Enter your first name " onChange={this.handleFirstName}/>
          <input type="text" placeholder="Enter your last name " onChange={this.handleLastName}/>
        </div>
        <div>Hello {this.state.firstName}, {this.state.lastName}</div>
      </>
    );
  }
}

export default InputExe;
