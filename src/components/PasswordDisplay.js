import React from "react";
import copy from "clipboard-copy";
import copyIcon from "../assets/img/copy.png";

const PasswordDisplay = ({ password }) => {
  const handleCopyToClipboard = () => {
    copy(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="password-display">
      <p>{password}</p>
      <button className="copy-button" onClick={handleCopyToClipboard}>
        <img src={copyIcon} alt="Copy Button" />
      </button>
    </div>
  );
};

export default PasswordDisplay;
