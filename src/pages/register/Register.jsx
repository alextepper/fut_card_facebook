import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post(
          process.env.REACT_APP_GENERAL_URI + "/api/auth/register",
          user
        );
        navigateHome();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="loginBody">
      <Topbar />
      <div className="loginContainer">
        <form className="loginCard" onSubmit={handleClick}>
          <h2>Sign up</h2>
          <input
            placeholder="Username"
            required
            ref={username}
            className="loginInput"
          />
          <input
            placeholder="Email"
            required
            ref={email}
            className="loginInput"
            type="email"
          />
          <input
            placeholder="Password"
            required
            ref={password}
            className="loginInput"
            type="password"
            minLength="6"
          />
          <input
            placeholder="Password Again"
            required
            ref={passwordAgain}
            className="loginInput"
            type="password"
          />
          <button className="loginButton" type="submit">
            Sign Up
          </button>
          <button className="signupButton" onClick={navigateHome}>
            Log into Account
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
