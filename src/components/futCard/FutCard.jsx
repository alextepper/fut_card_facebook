import React from "react";
import "./futCard.css";
import ReactCountryFlag from "react-country-flag";

export default function FutCard({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="futCardContainer">
      <div className="futCardWrapper">
        <div
          className="futCardTemplate"
          style={{
            backgroundImage: `url(${PF}/cards/2.png)`,
            backgroundSize: "cover",
          }}
        >
          <img
            src={user.profilePicture || PF + "/person/noAvatar.png"}
            alt="profilePic"
            className="futCardProfilePic"
          />
          <span className="futCardUsername">{user.username}</span>
          <span className="futCardOrigin">
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{
                width: "4em",
                height: "4em",
              }}
              title="US"
            />
          </span>
          <span className="futCardAge">56</span>
        </div>
      </div>
    </div>
  );
}
