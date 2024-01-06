import { useState } from "react";
import ButtonsAfterHover from "./ButtonsAfterHover";
import ButtonsBeforeHover from "./ButtonsBeforeHover";
function Buttons() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };
  return (
    <div className="buttons">
      {isHovered ? (
        <ButtonsAfterHover handleHoverOut={handleHoverOut} />
      ) : (
        <ButtonsBeforeHover handleHover={handleHover} />
      )}
    </div>
  );
}

export default Buttons;
