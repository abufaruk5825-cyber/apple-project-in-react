import { useNavigate } from "react-router-dom";
import watch from "../assets/watch_hero.jpg";

function AppleWatch() {
  const navigate = useNavigate();
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-hero" style={{ backgroundImage: `url(${watch})` }}>
        <h1>Apple Watch</h1>
        <p>The thinstant classic</p>
      </div>
      <div className="detail-content">
        <h2>Features</h2>
        <ul>
          <li>Health sensors: ECG, Blood Oxygen, Temperature</li>
          <li>Crash Detection & Fall Detection</li>
          <li>Always-On Retina display</li>
          <li>Water resistant 50 meters</li>
          <li>watchOS 11</li>
        </ul>
        <h2>Specifications</h2>
        <ul>
          <li>Display: 45mm or 41mm LTPO OLED</li>
          <li>Battery: Up to 18 hours</li>
          <li>Chip: S9 SiP</li>
          <li>Connectivity: GPS + Cellular</li>
        </ul>
      </div>
    </div>
  );
}
export default AppleWatch;
