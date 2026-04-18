import { useNavigate } from "react-router-dom";
import iphon16pro from "../../assets/iphon16pro.jpg";
import iphone16 from "../../assets/iphone16.jpg";
import watch from "../../assets/watch_hero.jpg";
import watchIcon from "../../assets/watch_logo_small_2x.png";
import promoApple from "../../assets/promo_apple_card__5cm7draujpey_large_2x.jpg";
import promo from "../../assets/hero_macbook_air_m3__cp4t7pn8zqaa_small_2x.jpg"
import bestPromo from "../../assets/promo_apple_watch_unity__casvx9ysh1le_large_2x.jpg"
import famouse from "../../assets/promo_airpods_4_avail__bl22kvpg6ez6_large_2x.jpg";
import apple from "../../assets/hero_apple_intelligence_headline__d3q0g47xl682_large_2x.png";
import mobile from "../../assets/promo_iphone_tradein__bugw15ka691e_large_2x.jpg";
import card from "../../assets/card_logo.png";
import link from "../../assets/hero_apple_watch_series_11__bdz1mml4dx6q_large_2x.jpg";
import seid from "../../assets/iphone_17_pro__b6q7im87srv6_large_2x.jpg";
function Header() {
  const navigate = useNavigate();
  return (
    <>
    <div>
    <p className="para-1">Order by 12/22 for free delivery of in‑stock items by 12/24. See checkout for specific delivery dates and options.<a href="https://applestore.com" className="shop">shop </a></p>
    </div>


 <section className="iphone"
  style={{ backgroundImage: `url(${iphon16pro})` }}>
 <div className="middle">
        <div><h1>iphone 16 pro</h1></div>
        <div>
        <h2>hello ,apple intelligence</h2>
    </div>
    <div>
        <button className="btn" onClick={() => navigate("/iphone16pro")}>learn more</button>
      <button className="buy" onClick={() => navigate("/buy", { state: { productKey: "iphone16pro" } })}>buy</button>
 </div> 
</div>
</section>

<section className="iphone-16" style={{backgroundImage:`url(${iphone16})`}}>
    <div className="center">
        <div><h1>iphone 16</h1></div>
        <div><h2>Hello,Apple intelligence</h2></div>
        <div>
            <button id="learn" onClick={() => navigate("/iphone16")}>learn more</button>
            <button id="buy" onClick={() => navigate("/buy", { state: { productKey: "iphone16" } })}>buy</button>
        </div>
    </div>
</section>
    


   <section className="watch" style={{backgroundImage:`url(${watch})`}}>
    <div className="time">
        <div>
            <img src={watchIcon} alt=""/>
        </div>
    <div><h3>thinstant classic</h3></div>
    <div className="sied">
        <button className="learn-more" onClick={() => navigate("/applewatch")}>learn more</button>
        <button className="buy-1" onClick={() => navigate("/buy", { state: { productKey: "applewatch" } })}>buy</button>
    </div>
    </div>
</section> 


<section className="ss" >
    <div className="s">
<section className="container" style={{backgroundImage:`url(${promoApple})`}}>
    <div className="ipad-pro">
        <img src={card} alt=""style={{width:"90px"}} />
      <div><h1>iphone best</h1></div>  
    <div><h2>incredibly power full</h2></div>
    <div>
        <button id="learn-more" onClick={() => navigate("/iphonebest")}>learn more</button>
        <button id="buy-1" onClick={() => navigate("/buy", { state: { productKey: "iphonebest" } })}>buy</button>
    </div>
    </div>
</section>

<section className="container-1" style={{backgroundImage:`url(${promo})`}}>
    <div className="mac-book">
      <div><h1>macbook pro</h1></div>  
    <div><h2>awork of smart</h2></div>
    <div>
        <button id="learn-more-1" onClick={() => navigate("/macbook")}>learn more</button>
        <button id="buy-2" onClick={() => navigate("/buy", { state: { productKey: "macbook" } })}>buy</button>
    </div>
    </div>
</section>

<section className="container-2" style={{backgroundImage:`url(${bestPromo})`}}>
    <div className="moder-watch">
      <div><h1>modern watch</h1></div>  
    <div><h2>samart time count</h2></div>
    <div>
        <button id="learn-more-2" onClick={() => navigate("/modernwatch")}>learn more</button>
        <button id="buy-3" onClick={() => navigate("/buy", { state: { productKey: "modernwatch" } })}>buy</button>
    </div>
    </div>
</section>

</div>
</section>


<section className="apple-s1">
    <img src={famouse} alt="smart electronics" className="apple-s1-img" />
    <div className="web">
        <h1>smart electronics</h1>
        <div className="butn-0">
            <button className="cr7" onClick={() => navigate("/smartelectronics")}>learn more</button>
            <button className="cr7-1" onClick={() => navigate("/buy", { state: { productKey: "smartelectronics" } })}>buy</button>
        </div>
    </div>
</section>
   

   <section className="post" style={{backgroundImage:`url(${mobile})`}}>
     <div className="list">
        <div style={{display:"flex", justifyContent:"center"}}><i class="fa-brands fa-apple" style={{fontSize:"30px"}}></i><h1>Trade In</h1></div>
        <div><div><h3>Get upto $195-$685</h3></div>
           <div><h3> in credit when you trade in</h3></div>
          <div><h3> iphone 13 or higher.</h3></div></div>
         
     <div style={{padding:"20px 0 0 0"}}>
        <button className="btn-00" onClick={() => navigate("/tradein")}>learn more</button>
        <button className="btn-01" onClick={() => navigate("/buy", { state: { productKey: "tradein" } })}>buy</button>
     </div>
    
     </div>
   </section>

   
   <section className="app">
    <div className="app-1">

   <section className="app-2" style={{backgroundImage:`url(${link})`}}>
    <div className="app-3">
    <h2>The ultimate way to</h2>
    <h2>watch your health</h2>
    <div>
        <button className="btn-s" onClick={() => navigate("/watchhealth")}>learn more</button>
        <button className="btn-z" onClick={() => navigate("/buy", { state: { productKey: "watchhealth" } })}>buy</button>
    </div>
    </div>
   </section>
    <section className="seya1" style={{backgroundImage:`url(${seid})`}}>
        <div className="seya-1">
            <div className="seya-btns">
              <button className="btn-s0" onClick={() => navigate("/iphone17pro")} style={{marginTop:"5px" , backgroundColor:"blue"}}>learn more</button>
              <button className="btn-z0" onClick={() => navigate("/buy", { state: { productKey: "iphone17pro" } })} style={{marginLeft:"12px"}}>buy</button>
              <h1>iphone 17 pro</h1>
            </div>
        </div>
        </section>

    </div>
   </section>

<section>
    <div className="gallery">
    <div className="gallery-item">
      <img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg" class="gallery-img" alt="Gallery image 1"/>
    </div>

    <div className="gallery-item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1280px-Flag_of_Ethiopia.svg.png" class="gallery-img" alt="Gallery image 2"/>
    </div>
    <div class="gallery-item">
        <img src="https://cdn.logojoy.com/wp-content/uploads/20230509113407/apple-logo-1977.png" class="gallery-img" alt="Gallery image 3"/>
      </div>

  </div>
</section> 
   </>
   
  );
}
export default Header;
