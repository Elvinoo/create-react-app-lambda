import React from "react";
import style from "../Pages/HomePage.module.css";
import partner from "../Assets/Images/web-images/partner-logo.svg";

export default function Partners() {
  return (
    <div className={style.wrapper + " " + style.main_tour_head}>
      <h1 className={style.bold_40px + " " + style.partners}>Partners</h1>
      <div className={style.logo_container}>
        <div className={style.partner}>
          <img src={partner} alt="partner" />
        </div>
        <div className={style.partner}>
          <img src={partner} alt="partner" />
        </div>
        <div className={style.partner}>
          <img src={partner} alt="partner" />
        </div>
        <div className={style.partner}>
          <img src={partner} alt="partner" />
        </div>
      </div>
    </div>
  );
}
