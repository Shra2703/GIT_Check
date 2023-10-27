import React from "react";

class ChangeTitle extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  //   changing the title using life cycle methods
  componentDidMount() {
    document.title = this.state.firstName + " " + this.state.lastName;
    console.log(document.title);
  }
  componentDidUpdate() {
    document.title = this.state.firstName + " " + this.state.lastName;
    console.log(document.title);
  }

  render() {
    return (
      <>
        <h1>Changing the title also</h1>
        <div>
          <input
            type="text"
            placeholder="Enter your first name "
            onChange={this.handleFirstName}
          />
          <input
            type="text"
            placeholder="Enter your last name "
            onChange={this.handleLastName}
          />
        </div>
        <div>
          Hello {this.state.firstName}, {this.state.lastName}
        </div>
      </>
    );
  }
}

export default ChangeTitle;
