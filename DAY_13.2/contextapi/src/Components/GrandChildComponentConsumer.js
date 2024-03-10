import { colorContext } from "../context";

const GrandChildComponentConsumer = () => {
  // consuming the use Context 3rd step with the help consumer
  return (
    <>
      <colorContext.Consumer>
        {(value) => <p style={{ color: value.color }}>Color: {value.color}</p>}
      </colorContext.Consumer>
    </>
  );
};

export default GrandChildComponentConsumer;
