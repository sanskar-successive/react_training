import { useContext } from "react";
import { CartContext } from "./CartContext";
import Product from "./Product";

const ShoppingPage = () => {

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ];
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
