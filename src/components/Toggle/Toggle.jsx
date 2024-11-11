

import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE_DARK_MODE" }); // Action type fixed
  };

  return (
    <div className="toggle cursor-pointer" onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className="t-button cursor-pointer"
        style={darkMode ? { right: "2px" } : { left: "2px" }} // Position button based on darkMode
      ></div>
    </div>
  );
};

export default Toggle;

