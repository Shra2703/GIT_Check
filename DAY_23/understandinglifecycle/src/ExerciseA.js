import React from "react";

class ExerciseA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Doing with the 1st exercise",
      data: [],
    };
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then(response => response.json()).then(data => this.setState({data}))
  }
  render() {
    console.log(this.state.data)
    return (
      <>
        <h1>{this.state.name}</h1>
        {
            this.state.data.map((d) => (
                // <div>{d.id}</div>
                <img src={d.url} alt={d.title} />

            ))
        }
      </>
    );
  }
}

export default ExerciseA;
