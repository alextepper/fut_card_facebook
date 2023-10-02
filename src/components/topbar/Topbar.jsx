import React, { useContext } from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext, AuthContextProvider } from "../../context/AuthContext";

export default function Topbar() {
  const { user, logout } = useContext(AuthContext);

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
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search..." className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Badge badgeContent={4} color="secondary">
              <Person />
            </Badge>
          </div>
          <div className="topbarIconItem">
            <Badge badgeContent={4} color="secondary">
              <Chat />
            </Badge>
          </div>
          <div className="topbarIconItem">
            <Badge badgeContent={4} color="secondary">
              <Notifications />
            </Badge>
          </div>
          <div className="topbarIconItem">
            <LogoutIcon onClick={logoutHandler} />
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={user.profilePicture || "/assets/person/noAvatar.png"}
            alt="Profilepic"
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
