import React, { useState } from "react";
import "../../css/SharedButton.css";
import { shareIcon } from "../../data";
const ShareButton = ({ callback: displayLinks }) => {
  const [isActive, setState] = useState(false);
  const setClassName = () => {
    setState(!isActive);
    displayLinks(!isActive);
  };
  return (
    <button onClick={setClassName} className={`${isActive ? "active" : ""}`}>
      {shareIcon}
    </button>
  );
};

export default ShareButton;
