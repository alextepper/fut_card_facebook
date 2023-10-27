import React from "react";
import "./dialog.css";

const Dialog = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="custom-alert-overlay">
      <div className="custom-alert">
        <p>{message}</p>
        <div className="alert-buttons">
          <button className="alertButton" onClick={onConfirm}>
            Confirm
          </button>
          <button className="alertButton cancelButton" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
