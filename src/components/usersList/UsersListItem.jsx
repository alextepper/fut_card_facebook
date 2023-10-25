import React from "react";
import "./usersList.css";
import { Link } from "react-router-dom";

export default function UsersListItem({ user }) {
  const curentsUser = localStorage.getItem("user");
  const userId = JSON.parse(curentsUser).id;

  return (
    <Link
      style={{ textDecoration: "none", color: "#000" }}
      to={`/profile/${user.username}`}
    >
      <li
        className={`usersListItem ${user._id === userId ? "highlighted" : ""}`}
      >
        <div className="userRank">{user.rank}</div>
        <img
          src={user.profilePicture || "assets/person/noAvatar.png"}
          alt="profilePic"
          className="userImage"
        />
        <div className="itemRight">
          <div className="userName">{user.username}</div>
          <div className="userGeneralMark">{user.generalMark || 0}</div>
        </div>
      </li>
    </Link>
  );
}
