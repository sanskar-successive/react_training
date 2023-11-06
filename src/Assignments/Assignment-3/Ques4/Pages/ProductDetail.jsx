import { useNavigate, useParams } from "react-router-dom";
import { products } from "../products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = parseInt(id);
  const product = products.find((item) => {
    return item.id === productId;
  });
  return (
    <>
      <h3>Product Details</h3>
      <h4>{product.name}</h4>
      <h4>Price : {product.price}</h4>
      <button onClick={() => navigate("/assignment-3/Ques-4/products")}>Go back</button>
    </>
  );
};
export default ProductDetail;
