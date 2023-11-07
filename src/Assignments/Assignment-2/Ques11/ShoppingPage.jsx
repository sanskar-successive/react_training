import { useContext } from "react";
import { CartContext } from "./CartContext";
import Product from "./Product";
import { products } from "./products";

const ShoppingPage = () => {

  
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div>
        <h3>Shop items</h3>
        {products.map((item) => (
          <Product product={item} />
        ))}
      </div>

      <div>
        <h3>Cart items</h3>
        <ul>
          {cart.map((item) => (
            <li>
              <h4>{item.name}</h4>
              <p>Price : {item.price}</p>
              <button onClick={() => handleRemoveItem(item)}>
                Remove item
              </button>
            </li>
          ))}
        </ul>
      </div>
      {cart.length > 0 && (
        <div>
          <h4>Cart Total : {total}</h4>
          <button onClick={clearCart}>Clear cart</button>
        </div>
      )}
    </>
  );
};
export default ShoppingPage;
