import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Header/footer/Footer.jsx";
import IPhone16Pro from "./pages/IPhone16Pro.jsx";
import IPhone16 from "./pages/IPhone16.jsx";
import AppleWatch from "./pages/AppleWatch.jsx";
import MacBook from "./pages/MacBook.jsx";
import TradeIn from "./pages/TradeIn.jsx";
import BuyPage from "./pages/BuyPage.jsx";
import "../src/css/style.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <BrowserRouter>
      <div className={dark ? "dark-mode" : "light-mode"}>
        <button className="theme-toggle" onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
        <Routes>
          <Route path="/" element={<><Header /><Footer /></>} />
          <Route path="/iphone16pro" element={<IPhone16Pro />} />
          <Route path="/iphone16" element={<IPhone16 />} />
          <Route path="/applewatch" element={<AppleWatch />} />
          <Route path="/macbook" element={<MacBook />} />
          <Route path="/tradein" element={<TradeIn />} />
          <Route path="/buy" element={<BuyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;