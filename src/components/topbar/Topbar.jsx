import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Badge } from "@mui/material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">FutBook</span>
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

            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt="Profilepic"
          className="topbarImg"
        />
      </div>
    </div>
  );
}
