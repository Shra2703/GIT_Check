import { Component } from "react";
import Navbar from "./Navbar";
import CourseList from "./CourseList";
import { courses } from "./CourseListData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      courses: courses,
      cartCount: 0,
    };
  }

  handleCart = (course) => {
    let { courses, cartCount } = this.state;
    const cid = courses.indexOf(course);
    courses[cid].isInCart = !courses[cid].isInCart;

    // cart count imcrease or decrease
    if (courses[cid].isInCart) cartCount += 1;
    else cartCount -= 1;

    this.setState({
      courses: courses,
      cartCount: cartCount
    });
  };
  render() {
    let { courses, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <CourseList courses={courses} handleCart={this.handleCart} />
      </>
    );
  }
}

export default App;
