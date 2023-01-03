import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginUser = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    error,
    showPassword,
    setShowPassword,
    isVisible,
    errorMessage,
  } = useAuth();
  return (
    <div className="register-user-main">
      <h2>Login Yourself here</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <input
          type="text"
          style={{
            width: "400px",
            marginBottom: "1rem",
            padding: "10px",
            border: "1px solid gray",
            borderRadius: "4px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 15px 0px",
          }}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {error && <p style={{ marginTop: -5, color: "red", marginLeft: "-17rem" }}>Email is required</p>}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "400px",
              marginBottom: "1rem",
              padding: "10px",
              border: "1px solid gray",
              borderRadius: "4px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 1px 15px 0px",
            }}
            placeholder="Enter your password"
          />
          <IconButton style={{ position: "absolute", right: "1%", bottom: "45%" }} onClick={isVisible}>
            {showPassword ? <Visibility style={{ color: "blue" }} /> : <VisibilityOff />}
          </IconButton>

          {error && <p style={{ marginTop: -5, color: "red", marginLeft: "-15rem" }}>Password is required</p>}
          <NavLink to="/forgot-password">Forgot Password?</NavLink>
        </div>
        {/* <div></div> */}
        <button
          type="submit"
          style={{
            width: "400px",
            marginTop: "1rem",
            marginBottom: "1rem",
            padding: "10px",
            backgroundColor: "green",
            color: "white",
            fontSize: "18px",
            textTransform: "uppercase",
            border: "1px solid white",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginUser;
