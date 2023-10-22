import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactCountryFlag from "react-country-flag";
import "./flagSelector.css";
import FLAG_LIST from "./flagList";

function FlagSelector({ userFlag }) {
  const [selectedFlag, setSelectedFlag] = useState();
  const [menuVisible, setMenuVisible] = useState(false);

  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);

  const updateFlagInDb = async (flagCode) => {
    if (!user._id) {
      console.error("User ID not found in local storage.");
      return;
    }

    try {
      await axios.put(
        `${process.env.REACT_APP_GENERAL_URI}/api/users/${user._id}`,
        {
          userId: user._id,
          from: flagCode,
        }
      );
    } catch (error) {
      console.error("Error updating flag:", error);
    }
  };

  const handleFlagSelect = (flagCode) => {
    setSelectedFlag(flagCode);
    setMenuVisible(false);
    updateFlagInDb(flagCode);
  };

  useEffect(() => {
    setSelectedFlag(userFlag);
  }, [userFlag]);

  return (
    <div>
      <ReactCountryFlag
        countryCode={selectedFlag}
        svg
        className="selectedFlag"
        title={selectedFlag}
        onClick={() => setMenuVisible(!menuVisible)}
      />

      {menuVisible && (
        <div className="menu">
          {Object.entries(FLAG_LIST).map(([code, name]) => (
            <div
              key={code}
              className="flagItem"
              onClick={() => handleFlagSelect(code)}
            >
              <ReactCountryFlag
                countryCode={code}
                svg
                className="flagIcon"
                title={name}
              />
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FlagSelector;
