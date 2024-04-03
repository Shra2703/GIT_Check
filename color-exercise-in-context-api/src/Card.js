import React, { useContext } from "react";
import { cardContext } from "./context";

function Card() {
  let { color, text } = useContext(cardContext);
  return (
    <>
      <div  className = "card" style={{ backgroundColor: color }}>{text}</div>
    </>
  );
}

export default Card;
