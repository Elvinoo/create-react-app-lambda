import React from "react";
import style from "../Pages/HomePage.module.css";
import headLogo from "../Assets/Images/web-images/logo.svg";
export default function Header() {
  return (
    <div className={style.wrapper}>
      <header className={style.flex_justify_btw}>
        <div>
          <img src={headLogo} alt="logo" />
        </div>
        <div className={style.flex_justify_btw + " " + style.right}>
          <span className={style.norm_16px}>+994515855564</span>
          <span className={style.norm_16px}> incoming@vatravel.az</span>
          <select className={style.select} name="language" id="">
            <option value="english">EN</option>
            <option value="italian">IT</option>
            <option value="spanish">ES</option>
            <option value="french">FR</option>
          </select>
        </div>
      </header>
    </div>
  );
}
