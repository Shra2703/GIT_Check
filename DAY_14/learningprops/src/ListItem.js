import { Component } from "react";

class ListItem extends Component {
  render() {
    const { srcAdd, name, altText, bgColor } = this.props;
    return (
      <>
        <div className={bgColor}>
          <img src={srcAdd} alt={altText} />
          <p>{name}</p>
        </div>
      </>
    );
  }
}

export default ListItem;
