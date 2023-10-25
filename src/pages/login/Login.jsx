import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/Footer";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const navigateRegistration = () => {
    navigate("/register");
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await loginCall(
        { email: email.current.value, password: password.current.value },
        dispatch
      );
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="loginBody">
      <>
        <Topbar />
        <div className="loginContainer">
          <form className="loginCard" onSubmit={handleClick}>
            <h2>Login</h2>

            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <a href="#" className="forgotPasswordLink">
              Forgot password?
            </a>
            <button className="loginButton" type="submit" disabled={isFetching}>
              LOGIN
            </button>

            <button className="signupButton" onClick={navigateRegistration}>
              SIGN UP
            </button>
          </form>
        </div>
        <Footer />
      </>
    </div>
  );
}
