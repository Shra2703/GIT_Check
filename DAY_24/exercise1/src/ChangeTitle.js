import React from "react";

class ChangeTitle extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.timer = null;
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

    // performing multiple side-effects here
    this.timer = setInterval(() => {
      console.log("window widht:", window.innerWidth);
    }, 2000);
    console.log(document.title);
  }
  componentDidUpdate() {
    document.title = this.state.firstName + " " + this.state.lastName;
    console.log(document.title);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <h1>Changing the title also class</h1>
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
