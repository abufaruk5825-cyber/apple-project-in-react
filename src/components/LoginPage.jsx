import { useState } from "react";

function LoginPage({ onLogin, onClose }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    // Simple mock login — accept any credentials
    onLogin({ email: form.email });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box login-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="login-logo">
          <i className="fa-brands fa-apple" style={{ fontSize: "48px" }}></i>
        </div>
        <h2>Sign in to Apple</h2>
        <p className="modal-tagline">Sign in to continue to checkout</p>
        {error && <p className="login-error">{error}</p>}
        <form onSubmit={submit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Apple ID (Email)"
            value={form.email}
            onChange={handle}
            className="login-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handle}
            className="login-input"
          />
          <button type="submit" className="modal-cart" style={{ width: "100%" }}>
            Sign In
          </button>
        </form>
        <p className="login-footer">
          Don't have an Apple ID? <span className="login-link">Create one</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
