import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartSummary } from "../../utils/priceUtils";

function CartPage() {
  const { items, message } = useSelector((state) => state.cart);
  const { subtotal, gst, total } = getCartSummary(items);

  if (items.length === 0) {
    return (
      <main className="container">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
      </main>
    );
  }

  return (
    <main className="container">
      <h2>Your Cart</h2>

      {message && <p className="cart-message">{message}</p>}

      <div className="cart-layout">
        <div>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="cart-summary">
          <h3>Price Summary</h3>
          <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p>GST 10%: ₹{gst.toFixed(2)}</p>
          <h3>Total: ₹{total.toFixed(2)}</h3>
        </div>
      </div>
    </main>
  );
}

export default CartPage;