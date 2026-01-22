import React, { useState } from "react";
import "./userButton.css";

const userButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  // Temp user
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="" />
      <img
        onClick={() => setShowOptions(!showOptions)}
        src="/general/arrow.svg"
        alt="Arrow Icon"
        id="arrow"
      />

      {showOptions && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Settings</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Sign Up
    </a>
  );
};

export default userButton;
