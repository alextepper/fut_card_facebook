import React from "react";
import "./register.css";
import { Button } from "@mui/material";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FUT</h3>
          <span className="loginDesc">Login to change your life</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="username" type="text" className="loginInput" />
            <input placeholder="email" type="text" className="loginInput" />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
            />
            <Button className="loginButton" variant="contained" size="small">
              Register
            </Button>
            <Button className="loginButton" variant="outlined" size="small">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
