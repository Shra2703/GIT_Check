import React from "react";

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
    this.timer = null;
    console.log("Timer constructor");
  }
  //   static getDerivedStateFromProps() {
  //     console.log("Timer getDerivedStateFromProps");
  //     return null;
  //   }
  //   shouldComponentUpdate() {}
  render() {
    console.log("Timer render");

    return (
      <>
        <h1>
          Timer: {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
        </h1>
      </>
    );
  }
  componentDidMount() {
    console.log("timer componentDidMount");
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  //   did not used
  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("timer getSnapshotBeforeUpdate");
  //   }
  //   componentDidUpdate() {
  //     console.log("timer componentDidUpdate");
  //   }
}

export default Timer;
