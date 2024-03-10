import { useContext } from "react";
import { colorContext } from "../context";


const GrandChildComponent = (props) => {
    const { color } = props;
    // consuming the use Context
    const val = useContext(colorContext);
    return (
      <>
        <p style={{color : val}}>
            Color: {val}
        </p>
      </>
    );
  };
  
  export default GrandChildComponent;
  