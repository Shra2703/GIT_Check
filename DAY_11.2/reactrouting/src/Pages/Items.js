import { Link } from "react-router-dom";
import { ITEMS } from "../data/ItemData";

const Items = () => {
  return (
    <>
      <h1>Items</h1>
      <ul>
        {ITEMS.map((item) => (
            <>
            <Link to = {`/items/${item.id}`}>{item.id}</Link> <br /><br />
            </>
        ))}
        {/* <Link to="/items/item-1">Item 1</Link> <br />
        <br />
        <Link to="/items/item-2">Item 2</Link> <br /> <br />
        <Link to="/items/item-3">Item 3</Link> <br /> <br /> */}
      </ul>
    </>
  );
};

export default Items;
