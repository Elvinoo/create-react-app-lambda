import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../Pages/HomePage.module.css";
const ButtonsBeforeHover = ({ handleHover }) => {
  let navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className={style.buttons_before_hover}>
      <button className={style.btn + " " + style.home} onClick={goToHome}>
        Home
      </button>

      <button
        className={style.btn + " " + style.menu}
        onMouseEnter={handleHover}
      >
        Menu
      </button>
    </div>
  );
};

export default ButtonsBeforeHover;
