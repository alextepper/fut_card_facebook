import React, { useContext } from "react";
import "./topbar.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);

  const logoutHandler = () => {
    try {
      localStorage.removeItem("user");
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (user) {
    return (
      <div className="topbarContainer gradientTopbar">
        <div className="topbarLeft">
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <span className="logo">FutBook</span>
          </Link>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <Link
              to={"/test-question"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Test Yourself
            </Link>
          </div>

          <Link to={`/profile/${user.username}`}>
            <img
              src={user.profilePicture || "/assets/person/noAvatar.png"}
              alt="Profilepic"
              className="topbarImg"
            />
          </Link>
          <div className="topbarIconItem">
            <LogoutIcon onClick={logoutHandler} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="topbarContainer whiteTopbar">
        <div className="topbarLeft">
          <Link
            to={"/"}
            style={{ textDecoration: "none", color: "rgba(79, 146, 196, 1)" }}
          >
            <span className="whiteLogo">FutBook</span>
          </Link>
        </div>
        <div className="topbarCenter"></div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <div className="topbarLink">
              <Link
                to={"/login"}
                style={{
                  textDecoration: "none",
                  color: "rgba(79, 146, 196, 1)",
                }}
              >
                Login
              </Link>
            </div>
            <div className="topbarLink">
              <Link
                to={"/register"}
                style={{
                  textDecoration: "none",
                  color: "rgba(79, 146, 196, 1)",
                }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
