import { Link } from "react-router-dom";
import { products } from "../products";

const ProductsList = () => {
  return (
    <>
      <h3>Products page</h3>
      <Link to="/assignment-3/Ques-4/">Go to Home</Link>
      {products.map((item) => (
        <li>
          <Link to={`/assignment-3/Ques-4/products/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </>
  );
};
export default ProductsList;
