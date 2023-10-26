import React from "react";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Component for life cycle methods",
      data: [],
    };
  }
  componentDidMount() {
    // fetching the data from the api call
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    console.log(this.state.data);

    return (
      <>
        <h1>Component A</h1>
        <ul>
          {this.state.data.map((d) => (
            <li>{d.username}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default ComponentA;
