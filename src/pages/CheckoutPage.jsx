import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const DELIVERY_OPTIONS = [
  { id: "standard", label: "Standard Delivery (5–7 days)", cost: 0 },
  { id: "express", label: "Express Delivery (1–2 days)", cost: 19.99 },
];

const PAYMENT_METHODS = [
  { id: "card", label: "💳 Credit / Debit Card" },
  { id: "mobile", label: "📱 Mobile Payment" },
  { id: "cash", label: "💵 Cash on Delivery" },
];

const STEPS = ["Shipping", "Delivery", "Payment", "Review"];

function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, totalPrice, clearCart } = useCart();

  const [step, setStep] = useState(0);
  const [placed, setPlaced] = useState(false);

  // Shipping fields
  const [shipping, setShipping] = useState({
    fullName: "", phone: "", city: "", street: "",
  });
  const [shippingErrors, setShippingErrors] = useState({});

  // Delivery
  const [delivery, setDelivery] = useState("standard");

  // Payment
  const [payment, setPayment] = useState("");

  const deliveryCost = DELIVERY_OPTIONS.find((d) => d.id === delivery)?.cost ?? 0;
  const grandTotal = totalPrice + deliveryCost;

  // ── Redirect if cart is empty ──────────────────────────────────────────────
  if (cartItems.length === 0 && !placed) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty.</h2>
        <button className="back-btn" onClick={() => navigate("/")}>← Shop Now</button>
      </div>
    );
  }

  // ── Success screen ─────────────────────────────────────────────────────────
  if (placed) {
    return (
      <div className="checkout-success">
        <div className="checkout-success-card">
          <div className="checkout-success-icon">✓</div>
          <h2>Order Placed!</h2>
          <p>Thank you, <strong>{shipping.fullName}</strong>.</p>
          <p>Your order will be delivered to <strong>{shipping.city}, {shipping.street}</strong>.</p>
          <p className="checkout-success-total">Total paid: <strong>${grandTotal.toFixed(2)}</strong></p>
          <button className="add-to-cart-btn" style={{ maxWidth: 240, marginTop: 24 }} onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ── Validation ─────────────────────────────────────────────────────────────
  const validateShipping = () => {
    const errors = {};
    if (!shipping.fullName.trim()) errors.fullName = "Required";
    if (!shipping.phone.trim()) errors.phone = "Required";
    if (!shipping.city.trim()) errors.city = "Required";
    if (!shipping.street.trim()) errors.street = "Required";
    setShippingErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (step === 0 && !validateShipping()) return;
    setStep((s) => s + 1);
  };

  const handlePlaceOrder = () => {
    if (!payment) return;
    clearCart();
    setPlaced(true);
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="checkout-page">
      <button className="back-btn" onClick={() => navigate("/cart")}>← Back to Cart</button>

      {/* Progress bar */}
      <div className="checkout-steps">
        {STEPS.map((s, i) => (
          <div key={s} className={`checkout-step ${i <= step ? "active" : ""}`}>
            <div className="checkout-step-dot">{i < step ? "✓" : i + 1}</div>
            <span>{s}</span>
          </div>
        ))}
      </div>

      <div className="checkout-layout">

        {/* ── LEFT: step content ── */}
        <div className="checkout-main">

          {/* STEP 0 — Shipping */}
          {step === 0 && (
            <div className="checkout-card">
              <h2 className="checkout-card-title">Shipping Information</h2>
              {[
                { key: "fullName", label: "Full Name", placeholder: "John Appleseed" },
                { key: "phone",    label: "Phone Number", placeholder: "+1 555 000 0000" },
                { key: "city",     label: "City", placeholder: "Cupertino" },
                { key: "street",   label: "Street Address", placeholder: "1 Apple Park Way" },
              ].map(({ key, label, placeholder }) => (
                <div className="checkout-field" key={key}>
                  <label className="checkout-label">{label}</label>
                  <input
                    className={`auth-input ${shippingErrors[key] ? "input-error" : ""}`}
                    placeholder={placeholder}
                    value={shipping[key]}
                    onChange={(e) =>
                      setShipping((prev) => ({ ...prev, [key]: e.target.value }))
                    }
                  />
                  {shippingErrors[key] && (
                    <span className="checkout-error">Please fill this field</span>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* STEP 1 — Delivery */}
          {step === 1 && (
            <div className="checkout-card">
              <h2 className="checkout-card-title">Delivery Method</h2>
              {DELIVERY_OPTIONS.map((opt) => (
                <label key={opt.id} className={`checkout-radio-card ${delivery === opt.id ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="delivery"
                    value={opt.id}
                    checked={delivery === opt.id}
                    onChange={() => setDelivery(opt.id)}
                  />
                  <div>
                    <p className="checkout-radio-label">{opt.label}</p>
                    <p className="checkout-radio-sub">
                      {opt.cost === 0 ? "Free" : `+$${opt.cost.toFixed(2)}`}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          )}

          {/* STEP 2 — Payment */}
          {step === 2 && (
            <div className="checkout-card">
              <h2 className="checkout-card-title">Payment Method</h2>
              {PAYMENT_METHODS.map((pm) => (
                <label key={pm.id} className={`checkout-radio-card ${payment === pm.id ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="payment"
                    value={pm.id}
                    checked={payment === pm.id}
                    onChange={() => setPayment(pm.id)}
                  />
                  <p className="checkout-radio-label">{pm.label}</p>
                </label>
              ))}
              {!payment && (
                <p className="checkout-error" style={{ marginTop: 12 }}>
                  Please select a payment method to continue.
                </p>
              )}
            </div>
          )}

          {/* STEP 3 — Review */}
          {step === 3 && (
            <div className="checkout-card">
              <h2 className="checkout-card-title">Final Review</h2>

              <div className="checkout-review-section">
                <h3>Shipping</h3>
                <p>{shipping.fullName}</p>
                <p>{shipping.phone}</p>
                <p>{shipping.city}, {shipping.street}</p>
              </div>

              <div className="checkout-review-section">
                <h3>Delivery</h3>
                <p>{DELIVERY_OPTIONS.find((d) => d.id === delivery)?.label}</p>
              </div>

              <div className="checkout-review-section">
                <h3>Payment</h3>
                <p>{PAYMENT_METHODS.find((p) => p.id === payment)?.label}</p>
              </div>

              <div className="checkout-review-total">
                <span>Subtotal</span><span>${totalPrice.toFixed(2)}</span>
                <span>Delivery</span><span>{deliveryCost === 0 ? "Free" : `$${deliveryCost.toFixed(2)}`}</span>
                <span className="grand-label">Total</span><span className="grand-value">${grandTotal.toFixed(2)}</span>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="checkout-nav">
            {step > 0 && (
              <button className="checkout-back-step" onClick={() => setStep((s) => s - 1)}>
                ← Back
              </button>
            )}
            {step < 3 && (
              <button className="add-to-cart-btn checkout-next" onClick={handleNext}>
                Continue →
              </button>
            )}
            {step === 3 && (
              <button
                className="add-to-cart-btn checkout-next"
                onClick={handlePlaceOrder}
                disabled={!payment}
              >
                Place Order
              </button>
            )}
          </div>
        </div>

        {/* ── RIGHT: order summary (always visible) ── */}
        <div className="checkout-summary">
          <h3 className="checkout-summary-title">Order Summary</h3>
          {cartItems.map((item, i) => (
            <div key={i} className="checkout-summary-item">
              <img src={item.image} alt={item.name} className="checkout-summary-img" />
              <div className="checkout-summary-info">
                <p className="checkout-summary-name">{item.name}</p>
                {item.storage && <p className="checkout-summary-sub">{item.storage}</p>}
                {item.color && <p className="checkout-summary-sub">{item.color}</p>}
                <p className="checkout-summary-sub">Qty: {item.qty}</p>
              </div>
              <p className="checkout-summary-price">${(item.price * item.qty).toFixed(2)}</p>
            </div>
          ))}
          <div className="checkout-summary-divider" />
          <div className="checkout-summary-row">
            <span>Subtotal</span><span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="checkout-summary-row">
            <span>Delivery</span>
            <span>{deliveryCost === 0 ? "Free" : `$${deliveryCost.toFixed(2)}`}</span>
          </div>
          <div className="checkout-summary-row checkout-summary-grand">
            <span>Total</span><span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CheckoutPage;
