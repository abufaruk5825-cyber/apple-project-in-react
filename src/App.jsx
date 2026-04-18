import { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Header/footer/Footer.jsx";
import ProductModal from "./components/ProductModal.jsx";
import LoginPage from "./components/LoginPage.jsx";
import CheckoutPage from "./components/CheckoutPage.jsx";

import iphon16pro from "./assets/iphon16pro.jpg";
import iphone16 from "./assets/iphone16.jpg";
import watch from "./assets/watch_hero.jpg";
import promoApple from "./assets/promo_apple_card__5cm7draujpey_large_2x.jpg";
import promo from "./assets/hero_macbook_air_m3__cp4t7pn8zqaa_small_2x.jpg";
import bestPromo from "./assets/promo_apple_watch_unity__casvx9ysh1le_large_2x.jpg";
import famouse from "./assets/promo_airpods_4_avail__bl22kvpg6ez6_large_2x.jpg";
import mobile from "./assets/promo_iphone_tradein__bugw15ka691e_large_2x.jpg";
import link from "./assets/hero_apple_watch_series_11__bdz1mml4dx6q_large_2x.jpg";

const PRODUCTS = {
  iphone16pro: {
    name: "iPhone 16 Pro",
    tagline: "Hello, Apple Intelligence.",
    price: "From $999",
    image: iphon16pro,
    link: "https://www.apple.com/iphone-16-pro/",
    features: ["A18 Pro chip", "48MP camera system", "ProMotion display", "Titanium design"],
  },
  iphone16: {
    name: "iPhone 16",
    tagline: "Hello, Apple Intelligence.",
    price: "From $799",
    image: iphone16,
    link: "https://www.apple.com/iphone-16/",
    features: ["A18 chip", "Camera Control button", "Action button", "All-day battery"],
  },
  watch: {
    name: "Apple Watch",
    tagline: "Thinstant classic.",
    price: "From $399",
    image: watch,
    link: "https://www.apple.com/watch/",
    features: ["Health sensors", "Crash Detection", "Always-On display", "Water resistant"],
  },
  appleCard: {
    name: "Apple Card",
    tagline: "Incredibly powerful.",
    price: "No fees",
    image: promoApple,
    link: "https://www.apple.com/apple-card/",
    features: ["Daily Cash rewards", "No annual fee", "Privacy focused", "Works with Apple Pay"],
  },
  macbook: {
    name: "MacBook Pro",
    tagline: "A work of smart.",
    price: "From $1,599",
    image: promo,
    link: "https://www.apple.com/macbook-pro/",
    features: ["M3 Pro chip", "Up to 22hr battery", "Liquid Retina XDR", "Up to 128GB RAM"],
  },
  modernWatch: {
    name: "Apple Watch Unity",
    tagline: "Smart time count.",
    price: "From $499",
    image: bestPromo,
    link: "https://www.apple.com/watch/",
    features: ["Unity Braided Solo Loop", "Blood Oxygen app", "ECG app", "Sleep tracking"],
  },
  airpods: {
    name: "AirPods 4",
    tagline: "Smart electronics.",
    price: "From $129",
    image: famouse,
    link: "https://www.apple.com/airpods/",
    features: ["Active Noise Cancellation", "Adaptive Audio", "H2 chip", "Up to 30hr battery"],
  },
  tradeIn: {
    name: "iPhone Trade In",
    tagline: "Get up to $685 credit.",
    price: "Up to $685 credit",
    image: mobile,
    link: "https://www.apple.com/shop/trade-in",
    features: ["iPhone 13 or higher", "Instant credit", "Free shipping", "Easy online process"],
  },
  watchSeries: {
    name: "Apple Watch Series 11",
    tagline: "The ultimate health companion.",
    price: "From $399",
    image: link,
    link: "https://www.apple.com/watch/",
    features: ["Sleep apnea detection", "Double tap gesture", "Carbon neutral", "S9 chip"],
  },
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderDone, setOrderDone] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.name === product.name);
      if (exists) return prev.map((i) => i.name === product.name ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCartItems((prev) => prev.filter((i) => i.name !== name));
  };

  const handleCheckout = () => {
    if (!user) {
      setShowLogin(true);
    } else {
      setShowCheckout(true);
    }
    setShowCart(false);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLogin(false);
    setShowCheckout(true);
  };

  const handleOrderComplete = () => {
    setCartItems([]);
    setShowCheckout(false);
    setOrderDone(true);
    setTimeout(() => setOrderDone(false), 4000);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="top-bar">
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
          🛒 Cart ({cartItems.reduce((a, i) => a + i.qty, 0)})
        </button>
      </div>

      {showCart && (
        <div className="cart-drawer">
          <h2>Your Cart</h2>
          <button className="modal-close" onClick={() => setShowCart(false)}>✕</button>
          {cartItems.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div key={item.name} className="cart-item">
                  <span>{item.name} x{item.qty} — {item.price}</span>
                  <button onClick={() => removeFromCart(item.name)}>✕</button>
                </div>
              ))}
              <button className="modal-cart" style={{ width: "100%", marginTop: "20px" }}
                onClick={handleCheckout}>
                Checkout →
              </button>
            </>
          )}
        </div>
      )}

      {showLogin && (
        <LoginPage onLogin={handleLogin} onClose={() => setShowLogin(false)} />
      )}

      {showCheckout && (
        <CheckoutPage
          cartItems={cartItems}
          user={user}
          onClose={() => setShowCheckout(false)}
          onOrderComplete={handleOrderComplete}
        />
      )}

      {orderDone && (
        <div className="order-success">
          ✅ Order placed successfully! Thank you, {user?.email}
        </div>
      )}

      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        addToCart={addToCart}
      />

      <Header
        addToCart={addToCart}
        openProduct={(key) => setActiveProduct(PRODUCTS[key])}
      />
      <Footer />
    </div>
  );
}

export default App;
