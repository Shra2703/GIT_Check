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
  render() {
    let {courses} = this.state;
    return (
      <>
        <Navbar />
        <CourseList  courses = {courses}/>
      </>
    );
  }
}

export default App;
