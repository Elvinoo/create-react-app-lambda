import React from "react";
import { useState } from "react";
import ButtonsAfterHover from "./ButtonsAfterHover";
import ButtonsBeforeHover from "./ButtonsBeforeHover";
import style from "../Pages/HomePage.module.css";
function Buttons() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };
  return (
    <div className={style.buttons}>
      {isHovered ? (
        <ButtonsAfterHover handleHoverOut={handleHoverOut} />
      ) : (
        <ButtonsBeforeHover handleHover={handleHover} />
      )}
    </div>
  );
}

export default Buttons;
