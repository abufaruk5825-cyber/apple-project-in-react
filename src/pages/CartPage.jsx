import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cartItems, removeFromCart, clearCart, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <button className="back-btn" onClick={() => navigate("/")}>← Back to Home</button>
        <div className="cart-empty">
          <i className="fa-solid fa-bag-shopping" style={{ fontSize: "64px", color: "#ccc" }} />
          <h2>Your cart is empty</h2>
          <p>Add some products to get started.</p>
          <button className="add-to-cart-btn" style={{ maxWidth: "240px", marginTop: "20px" }} onClick={() => navigate("/")}>
            Shop Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <button className="back-btn" onClick={() => navigate("/")}>← Continue Shopping</button>
      <div className="cart-container">
        <h1 className="cart-title">Your Cart ({totalItems} item{totalItems !== 1 ? "s" : ""})</h1>

        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                {item.storage && <p>Storage: {item.storage}</p>}
                {item.color && <p>Color: {item.color}</p>}
                <p className="cart-item-price">${item.price} × {item.qty}</p>
              </div>
              <div className="cart-item-actions">
                <p className="cart-item-subtotal">${item.price * item.qty}</p>
                <button className="cart-remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="cart-total">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
          <button className="checkout-btn" onClick={() => navigate("/checkout")}>
            Checkout
          </button>
          <button className="cart-clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
