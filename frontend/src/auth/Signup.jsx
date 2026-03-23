import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3002/signup", { ...inputValue });
      if (data.success) {
        alert("Signup Successful!");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Error during signup:", error);
    alert("Server is not responding. Check your Backend terminal.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: "400px", border: "1px solid #eee" }}>
        <h2 className="text-center mb-4 fw-normal">Signup Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-muted small">Email address</label>
            <input 
              type="email" 
              name="email" 
              className="form-control" 
              value={email} 
              onChange={handleOnChange} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-muted small">Username</label>
            <input 
              type="text" 
              name="username" 
              className="form-control" 
              value={username} 
              onChange={handleOnChange} 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="form-label text-muted small">Password</label>
            <input 
              type="password" 
              name="password" 
              className="form-control" 
              value={password} 
              onChange={handleOnChange} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2" style={{ backgroundColor: "#387ed1" }}>
            Submit
          </button>
          <div className="text-center mt-4">
            <span className="text-muted small">
              Already have an account? <Link to="/login" className="text-decoration-none" style={{ color: "#387ed1" }}>Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;