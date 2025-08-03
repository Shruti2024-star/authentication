import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const backendURL = process.env.REACT_APP_BACKEND_URL;



function ResetPassword() {
  const [form, setForm] = useState({ email: "", newPassword: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendURL}/api/auth/forgot-password`, form);
      setMessage(res.data.message);
      setTimeout(() => navigate("/login"), 2000); 

    } catch (err) {
      setMessage(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-3">Reset Password</h3>

        {message && (
          <div className="alert alert-info text-center p-2">
            {message}
          </div>
        )}

        <form onSubmit={handleReset}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Reset</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;

