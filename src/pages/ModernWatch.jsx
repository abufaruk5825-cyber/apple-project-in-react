import { useNavigate } from "react-router-dom";
import watch from "../assets/promo_apple_watch_unity__casvx9ysh1le_large_2x.jpg";

function ModernWatch() {
  const navigate = useNavigate();
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-hero" style={{ backgroundImage: `url(${watch})`,margin:"0 10px 0 10px"  }}>
        <h1>Modern Watch</h1>
        <p>Smart time, every moment</p>
      </div>
      <div className="detail-content">
        <h2>Features</h2>
        <ul>
          <li>Unity Edition exclusive design</li>
          <li>Advanced health & fitness tracking</li>
          <li>Always-On Retina display</li>
          <li>Customizable watch faces</li>
          <li>Water resistant 50 meters</li>
        </ul>
        <h2>Specifications</h2>
        <ul>
          <li>Display: 45mm LTPO OLED</li>
          <li>Battery: Up to 18 hours</li>
          <li>Chip: S9 SiP</li>
          <li>Connectivity: GPS + Cellular</li>
        </ul>
      </div>
    </div>
  );
}
export default ModernWatch;
