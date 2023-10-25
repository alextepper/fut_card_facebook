import React, { useRef, useState } from "react";
import "./futCard.css";
import axios from "axios";
import FlagSelector from "../flagSelector/FlagSelector";

export default function FutCard({ user }) {
  const [file, setFile] = useState(null);
  const fileInput = useRef(null);
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

  return (
    <div className="futCardContainer">
      <div className="futCardWrapper">
        <div
          className="futCardTemplate"
          style={{
            backgroundImage: `url(${PF}/cards/8.png)`,
            backgroundSize: "cover",
          }}
        >
          <label htmlFor="file">
            <img
              src={
                (file && URL.createObjectURL(file)) ||
                user.profilePicture ||
                PF + "/person/noAvatar.png"
              }
              alt="profilePic"
              className="futCardProfilePic"
            />
            <input
              ref={fileInput}
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => {
                setFile(e.target.files[0]);
                uploadImage(user);
              }}
            />
          </label>

          <span className="futCardUsername">{user.username}</span>
          <span className="futCardOrigin">
            <FlagSelector userFlag={user.from || "IL"} />
          </span>
          <span className="futCardOverall">89</span>
          <span className="futCardAge">31</span>
          <div className="futCardMathStat">
            <span>MAT</span>
            <span>{user.matMark || 0}</span>
          </div>
          <div className="futCardLanguageStat">
            <span>LAN</span>
            <span>{user.lanMark || 0}</span>
          </div>
          <div className="futCardArtStat">
            <span>ART</span>
            <span>{user.artMark || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
