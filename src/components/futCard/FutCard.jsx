import React, { useRef, useState } from "react";
import "./futCard.css";
import axios from "axios";
import FlagSelector from "../flagSelector/FlagSelector";
import ReactCountryFlag from "react-country-flag";

export default function FutCard({ user }) {
  const [file, setFile] = useState(null);
  const fileInput = useRef(null);
  const currentUser = localStorage.getItem("user");
  const currentUserId = JSON.parse(currentUser).id;
  const isUserAuthed = user._id === currentUserId;

  const getShieldLevel = (generalScore) => {
    if (generalScore > 90) {
      return "black";
    } else if (generalScore > 80) {
      return "golden";
    } else if (generalScore > 70) {
      return "silver";
    } else if (generalScore > 50) {
      return "red";
    } else if (generalScore > 30) {
      return "yellow";
    } else if (generalScore < 30) {
      return "green";
    }
  };

  const shieldLevel = getShieldLevel(user.generalMark);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const uploadImage = async (user) => {
    const formData = new FormData();
    formData.append("userImage", fileInput.current.files[0]);
    formData.append("username", user.username);
    formData.append("userId", user._id);

    try {
      const response = await axios.post(
        process.env.REACT_APP_GENERAL_URI + "/api/storage/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully", response.data);
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  const handleFileChange = (e) => {
    console.log(user);
    console.log(currentUser);
    if (isUserAuthed) {
      setFile(e.target.files[0]);
      uploadImage(user);
    }
  };

  return (
    <div className="futCardWrapper">
      <div
        className="futCardTemplate"
        style={{
          backgroundImage: `url(/assets/cards/${shieldLevel}.png)`,
          backgroundSize: "cover",
        }}
      >
        <label htmlFor="file">
          <img
            src={
              (file && URL.createObjectURL(file)) ||
              user.profilePicture ||
              PF + "/assets/person/noAvatar.png"
            }
            alt="profilePic"
            className={`futCardProfilePic ${isUserAuthed && "cursor"}`}
          />
          {isUserAuthed && (
            <input
              ref={fileInput}
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={handleFileChange}
            />
          )}
        </label>

        <span className="futCardUsername">{user.username}</span>
        <span className="futCardOrigin">
          {isUserAuthed ? (
            <FlagSelector userFlag={user.from || "IL"} />
          ) : (
            <ReactCountryFlag
              countryCode={user.from || "IL"}
              svg
              title={user.from || "IL"}
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </span>
        <span className="futCardOverall">{user.generalMark}</span>
        <span className="futCardAge">31</span>
        <div className="futCardMathStat">
          <span>MAT</span>
          <span>{user.matMark}</span>
        </div>
        <div className="futCardLanguageStat">
          <span>LAN</span>
          <span>{user.lanMark}</span>
        </div>
        <div className="futCardArtStat">
          <span>ART</span>
          <span>{user.artMark}</span>
        </div>
      </div>
    </div>
  );
}
