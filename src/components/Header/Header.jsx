import iphon16pro from "../../assets/iphon16pro.jpg";
import iphone16 from "../../assets/iphone16.jpg";
import watch from "../../assets/watch_hero.jpg";
import watchIcon from "../../assets/watch_logo_small_2x.png";
import promoApple from "../../assets/promo_apple_card__5cm7draujpey_large_2x.jpg";
import promo from "../../assets/hero_macbook_air_m3__cp4t7pn8zqaa_small_2x.jpg"
import bestPromo from "../../assets/promo_apple_watch_unity__casvx9ysh1le_large_2x.jpg"
import famouse from "../../assets/promo_airpods_4_avail__bl22kvpg6ez6_large_2x.jpg";
function Header() {
  return (
    <>
    <div>
        <header>
    <nav>
        <ul className="nav-links" >
        <li>  <a href="#"><i style={{fontSize: "20px"}} className="fa-brands fa-apple"></i></a></li>
        <li><a href="https://www.apple.com/store">store</a></li>
        <li><a href="https://www.apple.com/mac/">mac</a></li>
        <li><a href="https://www.apple.com/ipad/">ipad</a></li>
        <li><a href="https://www.apple.com/iphone/">iphone</a></li>
        <li><a href="https://www.apple.com/watch/">watch</a></li>
        <li><a href="https://www.apple.com/vision">vision</a></li>
        <li><a href="https://www.apple.com/airpods/">airpad</a></li>
        <li><a href="https://www.apple.com/tv/">tv & Home</a></li>
        <li><a href="#">entertainment</a></li>
        <li><a href="#">accessories</a></li>
        <li><a href="#">Support</a></li>
        <li className="nav-icons"><a href="#"><i className="fas fa-search"></i></a></li>
        <li className="nav-icons"><a href="#"><i className="fa-solid fa-bag-shopping"></i></a></li>
        </ul>
    </nav>
   </header>
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
        <button className="btn">learn more</button>
      <button className="buy">buy</button>
 </div> 
</div>
</section>

<section className="iphone-16" style={{backgroundImage:`url(${iphone16})`}}>
    <div className="center">
        <div><h1>iphone 16</h1></div>
        <div><h2>Hello,Apple intelligence</h2></div>
        <div>
            <button id="learn">learn more</button>
            <button id="buy">buy</button>
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
        <button className="learn-more">learn more</button>
        <button className="buy-1">buy</button>
    </div>
    </div>
</section> 


<section className="ss" >
    <div className="s">
<section className="container" style={{backgroundImage:`url(${promoApple})`}}>
    <div className="ipad-pro">
      <div><h1>iphone best</h1></div>  
    <div><h2>incredibly power full</h2></div>
    <div>
        <button id="learn-more">learn more</button>
        <button id="buy-1">buy</button>
    </div>
    </div>
</section>

<section className="container-1" style={{backgroundImage:`url(${promo})`}}>
    <div className="mac-book">
      <div><h1>macbook pro</h1></div>  
    <div><h2>awork of smart</h2></div>
    <div>
        <button id="learn-more-1">learn more</button>
        <button id="buy-2">buy</button>
    </div>
    </div>
</section>

<section className="container-2" style={{backgroundImage:`url(${bestPromo})`}}>
    <div className="moder-watch">
      <div><h1>modern watch</h1></div>  
    <div><h2>samart time count</h2></div>
    <div>
        <button id="learn-more-2">learn more</button>
        <button id="buy-3">buy</button>
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
            <button className="cr7">learn more</button>
            <button className="cr7-1">buy</button>
        </div>
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
