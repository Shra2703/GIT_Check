import { Component } from "react";
import Navbar from "./Navbar";
import CourseList from "./CourseList";
import { courses } from "./CourseListData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: courses,
    };
  }

  handleCart = (course) => {
    const { courses } = this.state;
    const cid = courses.indexOf(course);
    courses[cid].isInCart = !courses[cid].isInCart;

    this.setState({
      courses: courses,
    });
  };
  render() {
    let { courses } = this.state;
    return (
      <>
        <Navbar />
        <CourseList courses={courses} 
        handleCart = {this.handleCart}/>
      </>
    );
  }
}

export default App;
