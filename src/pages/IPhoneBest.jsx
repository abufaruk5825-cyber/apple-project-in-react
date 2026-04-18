import { useNavigate } from "react-router-dom";
import promoApple from "../assets/promo_apple_card__5cm7draujpey_large_2x.jpg";

function IPhoneBest() {
  const navigate = useNavigate();
  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="detail-hero" style={{ backgroundImage: `url(${promoApple})`,margin:"0 10px 0 10px"  }}>
        <h1 style={{color:"black"}}>iPhone Best</h1>
        <p style={{color:"black"}}>Incredibly powerful — Apple at its finest</p>
      </div>
      <div className="detail-content">
        <h2>Why It's the Best</h2>
        <ul>
          <li>A18 Pro chip — fastest chip ever in a smartphone</li>
          <li>Apple Intelligence built-in</li>
          <li>Pro camera system with 5x optical zoom</li>
          <li>All-day battery with fast charging</li>
          <li>Titanium build — light yet incredibly strong</li>
        </ul>
        <h2>Exclusive Features</h2>
        <ul>
          <li>Camera Control button for instant photo access</li>
          <li>Action Button — fully customizable</li>
          <li>ProMotion 120Hz always-smooth display</li>
          <li>USB-C with USB 3 speeds</li>
          <li>iOS 18 with AI-powered tools</li>
        </ul>
        <h2>Specifications</h2>
        <ul>
          <li>Display: 6.3-inch Super Retina XDR ProMotion</li>
          <li>Storage: 128GB, 256GB, 512GB, 1TB</li>
          <li>Battery: Up to 27 hours video playback</li>
          <li>Colors: Black, White, Natural, Desert Titanium</li>
        </ul>
      </div>
    </div>
  );
}
export default IPhoneBest;
