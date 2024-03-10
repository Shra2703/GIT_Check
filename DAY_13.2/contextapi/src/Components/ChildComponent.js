import GrandChildComponent from "./GrandChildComponent";

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
        <GrandChildComponent color={color} />
      </div>
    </>
  );
};

export default ChildComponent;
