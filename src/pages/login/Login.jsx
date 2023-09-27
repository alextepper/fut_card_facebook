import React from "react";
import "./login.css";
import { Button } from "@mui/material";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FUT</h3>
          <span className="loginDesc">Login to change your life</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="email" type="text" className="loginInput" />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
            />
            <Button className="loginButton" variant="contained" size="small">
              Login
            </Button>
            <Button className="loginButton" variant="outlined" size="small">
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
