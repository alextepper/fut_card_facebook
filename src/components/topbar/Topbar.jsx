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
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">FutBook</span>
        </Link>
      </div>
      <div className="topbarCenter"></div>
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
}
