import styled from "styled-components";
import CourseCard from "./CourseCard.js";

const Left = styled.span`
  border: 1px solid black;
  width: 70%;
  height: 39rem;

  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
`;
const CourseList = (props) => {
  const { courses, handleCart } = props;
  return (
    <>
      <Left>
        {courses.map((course) => (
          <CourseCard course={course} handleCart={handleCart} />
        ))}
      </Left>
    </>
  );
};

export default CourseList;
