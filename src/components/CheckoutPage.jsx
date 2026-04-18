import { useState } from "react";

function CheckoutPage({ cartItems, user, onClose, onOrderComplete }) {
  const [step, setStep] = useState(1); // 1=shipping, 2=payment, 3=confirm
  const [shipping, setShipping] = useState({ name: "", address: "", city: "", zip: "" });
  const [payment, setPayment] = useState({ card: "", expiry: "", cvv: "" });
  const [errors, setErrors] = useState({});

  const total = cartItems.reduce((sum, item) => {
    const price = parseFloat(String(item.price).replace(/[^0-9.]/g, "")) || 0;
    return sum + price * item.qty;
  }, 0);

  const validateShipping = () => {
    const e = {};
    if (!shipping.name) e.name = "Required";
    if (!shipping.address) e.address = "Required";
    if (!shipping.city) e.city = "Required";
    if (!shipping.zip) e.zip = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validatePayment = () => {
    const e = {};
    if (!payment.card || payment.card.length < 16) e.card = "Enter valid card number";
    if (!payment.expiry) e.expiry = "Required";
    if (!payment.cvv || payment.cvv.length < 3) e.cvv = "Invalid CVV";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="checkout-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* Steps indicator */}
        <div className="checkout-steps">
          {["Shipping", "Payment", "Confirm"].map((s, i) => (
            <div key={s} className={`step ${step === i + 1 ? "active" : ""} ${step > i + 1 ? "done" : ""}`}>
              <span className="step-num">{step > i + 1 ? "✓" : i + 1}</span>
              <span>{s}</span>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="checkout-summary">
          {cartItems.map((item) => (
            <div key={item.name} className="checkout-item">
              <span>{item.name} x{item.qty}</span>
              <span>{item.price}</span>
            </div>
          ))}
          <div className="checkout-total">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>

        {/* Step 1: Shipping */}
        {step === 1 && (
          <div className="checkout-form">
            <h3>Shipping Information</h3>
            <p className="modal-tagline">Signed in as {user.email}</p>
            {["name", "address", "city", "zip"].map((field) => (
              <div key={field}>
                <input
                  className={`login-input ${errors[field] ? "input-error" : ""}`}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={shipping[field]}
                  onChange={(e) => setShipping({ ...shipping, [field]: e.target.value })}
                />
                {errors[field] && <span className="field-error">{errors[field]}</span>}
              </div>
            ))}
            <button className="modal-cart" style={{ width: "100%", marginTop: "12px" }}
              onClick={() => validateShipping() && setStep(2)}>
              Continue to Payment →
            </button>
          </div>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <div className="checkout-form">
            <h3>Payment Details</h3>
            <input className={`login-input ${errors.card ? "input-error" : ""}`}
              placeholder="Card Number (16 digits)" maxLength={16}
              value={payment.card}
              onChange={(e) => setPayment({ ...payment, card: e.target.value })} />
            {errors.card && <span className="field-error">{errors.card}</span>}
            <div style={{ display: "flex", gap: "10px" }}>
              <input className={`login-input ${errors.expiry ? "input-error" : ""}`}
                placeholder="MM/YY" value={payment.expiry}
                onChange={(e) => setPayment({ ...payment, expiry: e.target.value })} />
              <input className={`login-input ${errors.cvv ? "input-error" : ""}`}
                placeholder="CVV" maxLength={3} value={payment.cvv}
                onChange={(e) => setPayment({ ...payment, cvv: e.target.value })} />
            </div>
            {(errors.expiry || errors.cvv) && <span className="field-error">Check expiry and CVV</span>}
            <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
              <button className="modal-learn" style={{ flex: 1 }} onClick={() => setStep(1)}>← Back</button>
              <button className="modal-cart" style={{ flex: 1 }}
                onClick={() => validatePayment() && setStep(3)}>Review Order →</button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm */}
        {step === 3 && (
          <div className="checkout-form" style={{ textAlign: "center" }}>
            <h3>Confirm Your Order</h3>
            <p className="modal-tagline">Ship to: {shipping.name}, {shipping.address}, {shipping.city} {shipping.zip}</p>
            <p className="modal-tagline">Card ending in: ****{payment.card.slice(-4)}</p>
            <p className="modal-price">Total: ${total.toFixed(2)}</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
              <button className="modal-learn" style={{ flex: 1 }} onClick={() => setStep(2)}>← Back</button>
              <button className="modal-cart" style={{ flex: 1 }} onClick={onOrderComplete}>
                Place Order ✓
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutPage;
