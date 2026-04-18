import { useNavigate } from "react-router-dom";
import watch from "../assets/watch_hero.jpg";

function AppleWatch() {
  const navigate = useNavigate();
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-hero" style={{ backgroundImage: `url(${watch})`,margin:"0 10px 0 10px" }} >
        <h1 style={{paddingBottom:"24px" ,color:"blue"}}>Apple Watch Series 11</h1>
        <p style={{ color:"yellow"}}>Thinstant classic — thinner than ever</p>
      </div>
      <div className="detail-content">
        <h2>Design</h2>
        <ul>
          <li>Thinnest Apple Watch ever made</li>
          <li>Lightweight aluminum & titanium options</li>
          <li>Larger Always-On Retina display</li>
          <li>Customizable bands & watch faces</li>
          <li>Water resistant 50 meters</li>
        </ul>
        <h2>Specifications</h2>
        <ul>
          <li>Display: 45mm or 41mm LTPO OLED</li>
          <li>Battery: Up to 18 hours</li>
          <li>Chip: S9 SiP dual-core</li>
          <li>Connectivity: GPS + optional Cellular</li>
          <li>OS: watchOS 11</li>
        </ul>
      </div>
    </div>
  );
}
export default AppleWatch;
