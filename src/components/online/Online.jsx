import React from "react";
import "./online.css";
import { Badge } from "@mui/material";

export default function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <Badge color="success" overlap="circular" variant="dot">
          <img
            src={PF + user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
        </Badge>
        <span className="rightbarUsername">{user.username}</span>
      </div>
    </li>
  );
}
