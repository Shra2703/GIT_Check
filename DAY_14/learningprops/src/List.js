import { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    return (
      <>
        <div className="main">
          <h1>Reach me!!</h1>
          {/* props are send from parent to child like a argument the name of the props should be same name the which we are passing */}
          <ListItem
            srcAdd="https://cdn-icons-png.flaticon.com/128/2504/2504923.png"
            name="Linkedin"
            altText="Linkedin"
            bgColor="aqua"
          />
          <ListItem
            srcAdd="https://cdn-icons-png.flaticon.com/128/2504/2504911.png"
            name="Github"
            altText="Github"
            bgColor="gold"
          />
          <ListItem
            srcAdd="https://cdn-icons-png.flaticon.com/128/2504/2504947.png"
            name="Twitter"
            altText="Twitter"
            bgColor="blanchedalmond"
          />
        </div>
      </>
    );
  }
}

export default List;
