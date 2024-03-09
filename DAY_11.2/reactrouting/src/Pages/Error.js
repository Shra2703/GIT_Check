import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  // with the help of this we will navigate to home after few seconds
  const navigate = useNavigate();
//   useEffect(() => {
//     setTimeout(() => navigate("/"), 3000);
//   }, []);

// With the help of -1 we will reach to the back 
  useEffect(() => {
    setTimeout(() => navigate(-1), 3000);
  }, []);
  return (
    <>
      <h1>OOPS!! Something went wrong the page is not available</h1>
    </>
  );
};

export default Error;
