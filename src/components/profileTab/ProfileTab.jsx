import React from "react";

export default function ProfileTab({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div className="profileCover">
        <img src={PF + "post/4.jpeg"} alt="cover" className="profileCoverImg" />
        <img
          src={PF + "person/7.jpeg"}
          alt="person"
          className="profileUserImg"
        />
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">{user.username}</h4>
        <span className="profileInfoDesc">{user.desc}</span>
      </div>
    </>
  );
}
