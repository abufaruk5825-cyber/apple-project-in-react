import { useNavigate } from "react-router-dom";
import mobile from "../assets/promo_iphone_tradein__bugw15ka691e_large_2x.jpg";

function TradeIn() {
  const navigate = useNavigate();
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-hero" style={{ backgroundImage: `url(${mobile})`,margin:"0 10px 0 10px"  }}>
        <h1>Trade In</h1>
        <p>Get upto $195–$685 in credit</p>
      </div>
      <div className="detail-content">
        <h2>How It Works</h2>
        <ul>
          <li>Trade in your iPhone 13 or higher</li>
          <li>Get instant credit toward a new iPhone</li>
          <li>Apple estimates your trade-in value online</li>
          <li>Ship your old device for free</li>
          <li>Credit applied at checkout</li>
        </ul>
        <h2>Eligible Devices</h2>
        <ul>
          <li>iPhone 13 — up to $195</li>
          <li>iPhone 14 — up to $350</li>
          <li>iPhone 14 Pro — up to $500</li>
          <li>iPhone 15 Pro Max — up to $685</li>
        </ul>
        <h2>Requirements</h2>
        <ul>
          <li>Device must power on</li>
          <li>No cracked screen or broken components</li>
          <li>Must be factory reset before sending</li>
        </ul>
      </div>
    </div>
  );
}
export default TradeIn;
