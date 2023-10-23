import React from "react";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";
import UsersList from "../../components/usersList/UsersList";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <UsersList />
      </div>
    </>
  );
}
