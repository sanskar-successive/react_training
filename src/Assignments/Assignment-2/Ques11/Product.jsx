import { useContext } from "react";
import { CartContext } from "./CartContext";

const Product = ({ product }) => {
  
  const { cart, addToCart } = useContext(CartContext);
  const isInCart = cart.find((item) => item.id === product.id);
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <>
      <div>
        <h4>{product.name}</h4>
        <p>Price : {product.price}</p>
        {isInCart ? (
          <p>Item is in cart</p>
        ) : (
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        )}
      </div>
    </>
  );
};
export default Product;
