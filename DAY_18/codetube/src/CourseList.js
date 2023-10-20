import styled from "styled-components";
import CourseCard from "./CourseCard.js";

const Left = styled.div`
  border: 1px solid black;
  width: 70%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CourseList = (props) => {
  const {courses, handleCart} = props;
  return (
    <>
      <Left>
      {
        courses.map((course) => (
          <CourseCard  course = {course}
          handleCart = {handleCart}/>
        ))
      }
        
      </Left>
    </>
  );
};

export default CourseList;
