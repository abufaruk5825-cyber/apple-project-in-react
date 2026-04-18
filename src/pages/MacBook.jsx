import { useNavigate } from "react-router-dom";
import macbook from "../assets/hero_macbook_air_m3__cp4t7pn8zqaa_small_2x.jpg";

function MacBook() {
  const navigate = useNavigate();
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-hero" style={{ backgroundImage: `url(${macbook})`,margin:"0 10px 10px 10px" }}>
       <h1 style={{ color: "rgba(191, 111, 26, 1)" }}>MacBook Pro</h1>
        <p>A work of smart</p>
      </div>
      <div className="detail-content">
        <h2>Features</h2>
        <ul>
          <li>M3 chip with 8-core CPU</li>
          <li>Up to 18 hours battery life</li>
          <li>Liquid Retina display</li>
          <li>MagSafe charging</li>
          <li>macOS Sequoia</li>
        </ul>
        <h2>Specifications</h2>
        <ul>
          <li>Display: 13.6-inch Liquid Retina</li>
          <li>RAM: 8GB, 16GB, 24GB</li>
          <li>Storage: 256GB to 2TB SSD</li>
          <li>Weight: 1.24 kg</li>
        </ul>
      </div>
    </div>
  );
}
export default MacBook;
