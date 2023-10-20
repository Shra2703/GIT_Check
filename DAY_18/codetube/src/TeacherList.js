import styled from "styled-components";
import TeacherCard from "./TeacherCard.js";

const Right = styled.span`
  border: 1px solid black;
  width: 30%;
  height: 100%;
  height: 39rem;

  padding: 30px;
 display: flex;
 flex-direction: column;
 align-items: center;
 overflow-y: auto;
`;
const TeacherList = (props) => {
  const {courses, handleCart} = props;
  return (
    <>
      <Right>
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
      <TeacherCard />
        
      </Right>
    </>
  );
};

export default TeacherList;
