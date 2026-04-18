import { useNavigate } from "react-router-dom";
import airpods from "../assets/promo_airpods_4_avail__bl22kvpg6ez6_large_2x.jpg";

function SmartElectronics() {
  const navigate = useNavigate();
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-hero" style={{ backgroundImage: `url(${airpods})`, margin: "0 10px 0 10px" }}>
        <h1>Smart Electronics</h1>
        <p>Experience sound like never before</p>
      </div>
      <div className="detail-content">
        <h2>AirPods 4</h2>
        <ul>
          <li>All-new acoustic architecture for richer sound</li>
          <li>Active Noise Cancellation for immersive listening</li>
          <li>Adaptive Audio — seamlessly blends ANC and Transparency</li>
          <li>Personalized Spatial Audio with dynamic head tracking</li>
          <li>Up to 30 hours total battery life with case</li>
        </ul>
        <h2>Smart Features</h2>
        <ul>
          <li>Siri integration — hands-free voice control</li>
          <li>Automatic switching between Apple devices</li>
          <li>One-tap setup with iPhone</li>
          <li>Find My support</li>
        </ul>
        <h2>Specifications</h2>
        <ul>
          <li>Chip: Apple H2</li>
          <li>Connectivity: Bluetooth 5.3</li>
          <li>Water resistance: IPX4</li>
          <li>Colors: White</li>
        </ul>
      </div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <button className="btn" onClick={() => navigate("/buy", { state: { productKey: "smartelectronics" } })}>Buy Now</button>
      </div>
    </div>
  );
}

export default SmartElectronics;
