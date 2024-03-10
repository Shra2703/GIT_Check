import GrandChildComponent from "./GrandChildComponent";
import GrandChildComponentConsumer from "./GrandChildComponentConsumer";
const ChildComponent = (props) => {
  const { color } = props;
  return (
    <>
      <div
        style={{
          border: `10px solid black`,
          marginLeft: "50px",
          padding: "10px",
          fontSize: "30px",
          width: "300px",
        }}
      >
        {/* for props */}
        {/* <GrandChildComponent color={color} /> */}

        {/* context api using context api */}
        {/* <GrandChildComponent /> */}

        {/* Using Consumer */}
        <GrandChildComponentConsumer />
      </div>
    </>
  );
};

export default ChildComponent;
