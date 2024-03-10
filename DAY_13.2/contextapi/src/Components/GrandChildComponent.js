import { useContext } from "react";
import { colorContext } from "../context";


const GrandChildComponent = (props) => {
    const { color } = props;
    // consuming the use Context 3rd step
    const val = useContext(colorContext);
    return (
      <>
        <p style={{color : val.color}}>
            Color: {val.color}
        </p>
      </>
    );
  };
  
  export default GrandChildComponent;
  