import React from "react";
import "./usersList.css";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

export default function UsersListItem({ user, index }) {
  const curentsUser = localStorage.getItem("user");
  const userId = JSON.parse(curentsUser).id;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const getUserColor = (index) => {
    if (index === 0) {
      return "gold";
    } else if (index === 1) {
      return "silver";
    } else if (index === 2) {
      return "bronze";
    } else {
      return "";
    }
  };

  const userColor = getUserColor(index);

  return (
    <Link
      style={{ textDecoration: "none", color: "#000" }}
      to={`/profile/${user.username}`}
    >
      <li
        className={`usersListItem ${
          user._id === userId ? "highlighted" : ""
        } ${userColor}`}
      >
        <div className="userRank">{index + 1}</div>
        <img
          src={user.profilePicture || PF + "/assets/person/noAvatar.png"}
          alt="profilePic"
          className="userImage"
        />
        <div className="itemRight">
          <div className="userName">
            {user.username}
            <ReactCountryFlag
              countryCode={user.from}
              svg
              className="listFlag"
              title={user.from}
            />
          </div>

          <div className="userGeneralMark">{user.generalMark || 0}</div>
        </div>
      </li>
    </Link>
  );
}
