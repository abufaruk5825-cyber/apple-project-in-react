import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Header/footer/Footer.jsx";
import IPhone16Pro from "./pages/IPhone16Pro.jsx";
import IPhoneBest from "./pages/IPhoneBest.jsx";
import IPhone16 from "./pages/IPhone16.jsx";
import AppleWatch from "./pages/AppleWatch.jsx";
import ModernWatch from "./pages/ModernWatch.jsx";
import WatchHealth from "./pages/WatchHealth.jsx";
import MacBook from "./pages/MacBook.jsx";
import TradeIn from "./pages/TradeIn.jsx";
import SmartElectronics from "./pages/SmartElectronics.jsx";
import BuyPage from "./pages/BuyPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import NavBar from "./components/NavBar.jsx";
import "./css/style.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div className={dark ? "dark-mode" : "light-mode"}>
            <button className="theme-toggle" onClick={() => setDark(!dark)}>
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>
            <NavBar />
            <Routes>
              <Route path="/" element={<><Header /><Footer /></>} />
              <Route path="/iphone16pro" element={<IPhone16Pro />} />
              <Route path="/iphonebest" element={<IPhoneBest />} />
              <Route path="/iphone16" element={<IPhone16 />} />
              <Route path="/applewatch" element={<AppleWatch />} />
              <Route path="/modernwatch" element={<ModernWatch />} />
              <Route path="/watchhealth" element={<WatchHealth />} />
              <Route path="/macbook" element={<MacBook />} />
              <Route path="/tradein" element={<TradeIn />} />
              <Route path="/smartelectronics" element={<SmartElectronics />} />
              <Route path="/buy" element={<BuyPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
