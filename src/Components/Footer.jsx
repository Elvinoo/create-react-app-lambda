import React from "react";
import style from "../Pages/HomePage.module.css";
import footLogo from "../Assets/Images/web-images/logo-foot.svg";
export default function Footer() {
  return (
    <div className={style.full_screen + " " + style.black_bg}>
      <div className={style.footer_padding}>
        <footer className={style.flex_justify_btw + " " + style.black_bg}>
          <div>
            <img src={footLogo} alt="logo" />
          </div>
          <div className={style.flex_justify_btw + " " + style.right}>
            <span className={style.norm_16px + " " + style.white_col}>
              Instagram
            </span>
            <span className={style.norm_16px + " " + style.white_col}>
              Linkedin
            </span>
            <span className={style.norm_16px + " " + style.white_col}>
              Facebook
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
