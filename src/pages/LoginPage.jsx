import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const returnTo = state?.returnTo || "/";
  const returnState = state?.returnState || null;

  const [mode, setMode] = useState("login"); // "login" | "register"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const ok = mode === "login" ? login(email, password) : register(email, password);
    if (ok) {
      navigate(returnTo, { state: { ...returnState, fromAuth: true } });
    } else {
      setError("Please enter a valid email and password.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <i className="fa-brands fa-apple" style={{ fontSize: "48px" }} />
        </div>
        <h2>{mode === "login" ? "Sign In" : "Create Account"}</h2>

        <div className="auth-tabs">
          <button
            className={mode === "login" ? "auth-tab active" : "auth-tab"}
            onClick={() => { setMode("login"); setError(""); }}
          >
            Sign In
          </button>
          <button
            className={mode === "register" ? "auth-tab active" : "auth-tab"}
            onClick={() => { setMode("register"); setError(""); }}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="auth-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="auth-input"
          />
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="auth-submit">
            {mode === "login" ? "Sign In" : "Register"}
          </button>
        </form>

        <button className="auth-back" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
