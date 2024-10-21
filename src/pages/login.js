import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState(""); // This will act as the email
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email: username, // Using username as email
          password: password 
        }),
      });

      setLoading(false); // End loading

      if (response.ok) {
        const data = await response.json();
        alert("Login berhasil! Token: " + data.token);
        onLogin(); // Call the onLogin function to update the state in App.js
        navigate("/movie");
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Username atau password salah!");
      }
    } catch (error) {
      setLoading(false); // End loading
      console.error("Error during login:", error);
      alert("Terjadi kesalahan, silakan coba lagi.");
    }
  };

  return (
    <div className="login-container">
      <h2>login</h2> {/* Changed "Login" to "login" */}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username:</label> {/* Label for username */}
          <input 
            type="email" 
            value={username} // Using username state
            onChange={(e) => setUsername(e.target.value)}
            required 
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"} {/* Change button text based on loading state */}
        </button>
      </form>
    </div>
  );
}

export default Login;
