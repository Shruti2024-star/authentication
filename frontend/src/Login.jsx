import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const backendURL = import.meta.env.VITE_BACKEND_URL;


function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handles input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Handles form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${backendURL}/api/auth/login`, formData);

      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);
      

      setMessage(res.data.message); 
      setTimeout(() => navigate("/Welcome"), 2000); 
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }finally{
      setLoading(false);

    }
  };

  return (
<div>
  
 
  {message && (
  <div className="d-flex justify-content-center mt-3">
    <div
      className="alert alert-primary alert-dismissible fade show text-center"
      role="alert"
      style={{ maxWidth: "400px", width: "100%" }}
    >
      {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => setMessage("")}
      ></button>
    </div>
  </div>
)}

  {loading && (
  <div className="d-flex justify-content-center mt-3">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)}
 
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
      <h3 className="text-center mb-4">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <div className="text-center mt-3">
        <a href="/forgot-password">Forgot password?</a>
      </div>
    </div>
  </div>
</div>
  );
}

export default Login;

