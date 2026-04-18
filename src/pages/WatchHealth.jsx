import { useNavigate } from "react-router-dom";
import watch from "../assets/hero_apple_watch_series_11__bdz1mml4dx6q_large_2x.jpg";

function WatchHealth() {
  const navigate = useNavigate();
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-hero" style={{ backgroundImage: `url(${watch})`,margin:"0 10px 0 10px"  }}>
        <h1>Watch Your Health</h1>
        <p>The ultimate way to watch your health</p>
      </div>
      <div className="detail-content">
        <h2>Health Features</h2>
        <ul>
          <li>ECG app — detect irregular heart rhythm</li>
          <li>Blood Oxygen sensor</li>
          <li>Body temperature tracking</li>
          <li>Crash Detection & Fall Detection</li>
          <li>Sleep tracking with sleep stages</li>
        </ul>
        <h2>Fitness Features</h2>
        <ul>
          <li>80+ workout types</li>
          <li>Activity rings & daily goals</li>
          <li>GPS route tracking</li>
          <li>Swim-proof design</li>
        </ul>
        <h2>Specifications</h2>
        <ul>
          <li>Display: 45mm or 41mm LTPO OLED</li>
          <li>Battery: Up to 18 hours</li>
          <li>Chip: S9 SiP</li>
          <li>OS: watchOS 11</li>
        </ul>
      </div>
    </div>
  );
}
export default WatchHealth;
