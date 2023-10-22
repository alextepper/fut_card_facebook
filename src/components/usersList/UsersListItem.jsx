import React from "react";
import "./usersList.css";
import { Link } from "react-router-dom";

export default function UsersListItem({ user }) {
  return (
    <Link
      style={{ textDecoration: "none", color: "#000" }}
      to={`/profile/${user.username}`}
    >
      <li className="usersListItem">
        <img
          src={user.profilePicture || "assets/person/noAvatar.png"}
          alt="profilePic"
          className="userImage"
        />
        <div className="userName">{user.username}</div>
      </li>
    </Link>
  );
}
