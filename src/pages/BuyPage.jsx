import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { products } from "../data/products.js";

function BuyPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const productKey = state?.productKey;
  const product = products[productKey];

  const [selectedStorage, setSelectedStorage] = useState(
    products[productKey]?.storages?.[0] || ""
  );
  const [selectedColor, setSelectedColor] = useState(
    products[productKey]?.colors?.[0]?.name || ""
  );
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Product not found.</h2>
        <button className="back-btn" onClick={() => navigate("/")}>← Back to Home</button>
      </div>
    );
  }

  const price = product.prices?.[selectedStorage] || product.basePrice;

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="buy-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="buy-container">
        <div className="buy-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="buy-details">
          <h1>{product.name}</h1>
          <p className="buy-price">${price}</p>

          {product.storages?.length > 0 && (
            <div className="buy-section">
              <h3>Storage</h3>
              <div className="option-group">
                {product.storages.map((s) => (
                  <button
                    key={s}
                    className={`option-btn ${selectedStorage === s ? "selected" : ""}`}
                    onClick={() => setSelectedStorage(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.colors?.length > 0 && (
            <div className="buy-section">
              <h3>Color — <span style={{ fontWeight: "normal" }}>{selectedColor}</span></h3>
              <div className="color-group">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    className={`color-btn ${selectedColor === c.name ? "selected" : ""}`}
                    style={{ backgroundColor: c.hex }}
                    onClick={() => setSelectedColor(c.name)}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            {added ? "✓ Added to Cart!" : "Add to Cart"}
          </button>
          <button className="checkout-btn" onClick={() => alert("Proceeding to checkout...")}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
export default BuyPage;
