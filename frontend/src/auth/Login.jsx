import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
      try {
        const { data } = await axios.post("http://localhost:3002/login", inputValue);
        const { success, message, token, username } = data;

        if (success) {
          // 1. Store the "Ticket" and Name
          localStorage.setItem("token", token);
          localStorage.setItem("user", username);

          alert(`Welcome ${username}!`);
          navigate("/dashboard/*");
        } else {
          alert(message);
        }
      } catch (error) {
        // If the backend sent a 401, it lands here
        console.error("Login Error:", error);
        alert("Login Failed. Please check your credentials.");
      }
};

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: "400px" }}>
        <h2 className="text-center mb-4 fw-light">Login to Kite</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small text-muted">Email address</label>
            <input type="email" name="email" className="form-control" onChange={handleOnChange} required />
          </div>
          <div className="mb-4">
            <label className="form-label small text-muted">Password</label>
            <input type="password" name="password" className="form-control" onChange={handleOnChange} required />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2" style={{ backgroundColor: "#387ed1" }}>
            Login
          </button>
          <div className="text-center mt-3">
            <span className="small text-muted">New user? <Link to="/signup" className="text-decoration-none">Create an account</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;