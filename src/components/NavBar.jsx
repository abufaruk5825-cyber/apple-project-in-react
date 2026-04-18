import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function NavBar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#"><i style={{ fontSize: "20px" }} className="fa-brands fa-apple" /></a></li>
        <li><a href="https://www.apple.com/store">Store</a></li>
        <li><a href="https://www.apple.com/mac/">Mac</a></li>
        <li><a href="https://www.apple.com/ipad/">iPad</a></li>
        <li><a href="https://www.apple.com/iphone/">iPhone</a></li>
        <li><a href="https://www.apple.com/watch/">Watch</a></li>
        <li><a href="https://www.apple.com/airpods/">AirPods</a></li>
        <li><a href="https://www.apple.com/tv/">TV &amp; Home</a></li>
        <li className="nav-icons"><a href="#"><i className="fas fa-search" /></a></li>

        {user ? (
          <li className="nav-icons nav-user">
            <span className="nav-username">{user.email.split("@")[0]}</span>
            <button className="nav-logout-btn" onClick={logout}>Sign Out</button>
          </li>
        ) : (
          <li className="nav-icons">
            <button className="nav-login-btn" onClick={() => navigate("/login")}>Sign In</button>
          </li>
        )}

        <li className="nav-icons">
          <button className="nav-cart-btn" onClick={() => navigate("/cart")}>
            <i className="fa-solid fa-bag-shopping" />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
