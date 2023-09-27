import React from "react";
import "./online.css";
import { Badge } from "@mui/material";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <Badge color="success" overlap="circular" variant="dot">
          <img
            src={user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
        </Badge>
        <span className="rightbarUsername">{user.username}</span>
      </div>
    </li>
  );
}
