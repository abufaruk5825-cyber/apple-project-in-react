import { useNavigate } from "react-router-dom";
import iphone16 from "../assets/iphone16.jpg";

function IPhone16() {
  const navigate = useNavigate();
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-hero" style={{ backgroundImage: `url(${iphone16})` }}>
        <h1>iPhone 16</h1>
        <p>Hello, Apple Intelligence</p>
      </div>
      <div className="detail-content">
        <h2>Features</h2>
        <ul>
          <li>A18 chip</li>
          <li>48MP main camera</li>
          <li>Action Button</li>
          <li>Camera Control button</li>
          <li>All-day battery life</li>
        </ul>
        <h2>Specifications</h2>
        <ul>
          <li>Display: 6.1-inch Super Retina XDR</li>
          <li>Battery: Up to 22 hours video playback</li>
          <li>Storage: 128GB, 256GB, 512GB</li>
          <li>OS: iOS 18</li>
        </ul>
      </div>
    </div>
  );
}
export default IPhone16;
