import { useNavigate } from "react-router-dom";
import iphone17pro from "../assets/iphone_17_pro__b6q7im87srv6_large_2x.jpg";

function IPhone17Pro() {
  const navigate = useNavigate();
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-hero" style={{ backgroundImage: `url(${iphone17pro})`, margin: "0 10px 0 10px" }}>
        <h1>iPhone 17 Pro</h1>
        <p>Hello, Apple Intelligence.</p>
      </div>
      <div className="detail-content">
        <h2>What's New</h2>
        <ul>
          <li>A19 Pro chip — most powerful chip ever in a smartphone</li>
          <li>Apple Intelligence — next-generation AI built in</li>
          <li>Pro camera system with 5x optical zoom</li>
          <li>All-day battery with fast charging</li>
          <li>Titanium design in stunning new colors</li>
        </ul>
        <h2>Pro Features</h2>
        <ul>
          <li>Camera Control button for instant photo access</li>
          <li>Action Button — fully customizable</li>
          <li>ProMotion 120Hz always-smooth display</li>
          <li>USB-C with USB 3 speeds</li>
          <li>iOS 19 with advanced AI-powered tools</li>
        </ul>
        <h2>Specifications</h2>
        <ul>
          <li>Display: 6.3-inch Super Retina XDR ProMotion</li>
          <li>Storage: 256GB, 512GB, 1TB</li>
          <li>Battery: Up to 30 hours video playback</li>
          <li>Colors: Black, White, Natural, Desert Titanium, Orange Titanium</li>
        </ul>
      </div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <button className="btn" onClick={() => navigate("/buy", { state: { productKey: "iphone17pro" } })}>Buy Now</button>
      </div>
    </div>
  );
}

export default IPhone17Pro;
