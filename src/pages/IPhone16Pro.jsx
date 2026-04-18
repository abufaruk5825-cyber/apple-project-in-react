import { useNavigate } from "react-router-dom";
import iphon16pro from "../assets/iphon16pro.jpg";

function IPhone16Pro() {
  const navigate = useNavigate();
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-hero" style={{ backgroundImage: `url(${iphon16pro})` }}>
        <h1>iPhone 16 Pro</h1>
        <p>Hello, Apple Intelligence</p>
      </div>
      <div className="detail-content">
        <h2>Features</h2>
        <ul>
          <li>A18 Pro chip with 6-core GPU</li>
          <li>48MP Fusion camera system</li>
          <li>ProMotion display up to 120Hz</li>
          <li>Titanium design</li>
          <li>Action Button & Camera Control</li>
        </ul>
        <h2>Specifications</h2>
        <ul>
          <li>Display: 6.3-inch Super Retina XDR</li>
          <li>Battery: Up to 27 hours video playback</li>
          <li>Storage: 128GB, 256GB, 512GB, 1TB</li>
          <li>OS: iOS 18</li>
        </ul>
      </div>
    </div>
  );
}
export default IPhone16Pro;
