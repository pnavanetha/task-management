import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "../css/login.css";

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post("http://localhost:5000/login",{
        email,
        password
      });

      console.log(res.data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if(res.data.role === "admin") {
        navigate("/admin");
      }
      else if(res.data.role === "employee") {
        navigate("/employee");
      }
      else{
        navigate("/customer")
      }

      // alert("Login Successful");

    } catch (error) {

      alert("Login Failed");

    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <h2>Hello!</h2>
          <p>Sign in to your account</p>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} className="input" />
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" />
            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <span className="forgot">Forgot Password?</span>
            </div>
            <button type="submit" className="login-btn">
              SIGN IN
            </button>
          </form>
          <p className="create">
            Don't have an account? <span>Create</span>
          </p>
        </div>
        <div className="login-right">
          <h1>Welcome Back!</h1>
          <p>
            Login to access your dashboard and manage your data easily.
          </p>
        </div>
      </div>
      
      
    </div>
  );
};

export default Login;