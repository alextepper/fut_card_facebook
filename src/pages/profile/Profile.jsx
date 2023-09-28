import React from "react";
import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import ProfileTab from "../../components/profileTab/ProfileTab";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <ProfileTab />
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
