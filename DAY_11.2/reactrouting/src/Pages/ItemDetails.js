import { useParams } from "react-router-dom";
import { ITEMS } from "../data/ItemData";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  // useparams to get the the link which is clicked
  const { id } = useParams();
  const item = ITEMS.find((item) => item.id === id);
  const { title, description } = item;
  return (
    <>
      <h1>Items details</h1>
      <h2>{id}</h2>
      <h3>{title}</h3>
      <h3>{description}</h3>

      <Link to="/items">Back to Items page</Link>
    </>
  );
};

export default ItemDetails;
