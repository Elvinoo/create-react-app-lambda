import React, { useState } from "react";
import style from "../Pages/AboutAze.module.css";
import plusButton from "../Assets/Images/web-images/plus.svg";
import minusButton from "../Assets/Images/web-images/minus.svg";
import { aboutAze } from "../Data";

export default function AzeContentForMobile() {
  const [isOpen, setIsOpen] = useState(aboutAze.map((_, index) => index === 0));

  const handleToggle = (index) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className={style.mob_about_aze_content}>
      {aboutAze.map((data, index) => (
        <div
          key={index}
          className={`${style.mob_main_info} ${
            isOpen[index] ? style.opened : ""
          }`}
        >
          <div
            className={style.mob_header_with_plus}
            onClick={() => handleToggle(index)}
          >
            <h2 className={isOpen[index] ? style.yellowUnderline : ""}>
              {data.key}
            </h2>

            {isOpen[index] ? (
              <img src={minusButton} alt="minusButton" />
            ) : (
              <img src={plusButton} alt="plusButton" />
            )}
          </div>
          {isOpen[index] && <p className={style.data_value}>{data.value}</p>}
        </div>
      ))}
    </div>
  );
}
