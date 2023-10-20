// Teachers Card component
import styled from "styled-components";

const Main = styled.div`
  width: 85%;
  border: 1px solid;
  margin: 10px;
  background-color: white;
  border-radius: 19px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  padding: 10px;
  border-radius: 25px;
`;

const Text = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const Button = styled.button`
  width: 80%;
  margin: 10px;
  margin-left: 35px;
  font-size: 16px;
  padding: 8px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  /* background-color: rgb(103, 1, 103); */
  color: white;
  outline: none;
  cursor: pointer;
  border-radius: 15px;
  background-color: rgb(103, 1, 103);
`;

const TeacherCard = () => {
  return (
    <>
      {/* outer div */}
      <Main>
        {/* course img */}

        <Img
          src="https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d"
          alt="teacher-img"
        />

        {/* middle text or course text */}

        <Text>Falak Chandani</Text>

        {/* add to cart button */}

        <Button>Follow Me</Button>
      </Main>
    </>
  );
};

export default TeacherCard;
