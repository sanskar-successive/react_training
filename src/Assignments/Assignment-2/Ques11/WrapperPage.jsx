import { CartProvider } from "./CartContext";
import ShoppingPage from "./ShoppingPage";

const WrapperPage = () => {
  
  return (
    <CartProvider>
      <ShoppingPage />
    </CartProvider>
  );
};

export default WrapperPage;
