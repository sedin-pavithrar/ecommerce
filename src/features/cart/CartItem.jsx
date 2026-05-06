import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />

      <div>
        <h3>{item.title}</h3>
        <p>Price: ₹{item.price.toFixed(2)}</p>
        <p>Available stock: {item.stock}</p>

        <div className="quantity-controls">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>

        <p>Item Total: ₹{(item.price * item.quantity).toFixed(2)}</p>

        <button
          className="remove-btn"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;