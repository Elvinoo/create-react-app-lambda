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
            <a
              href="https://www.instagram.com/vatravel.az?igsh=MXd5OWdhdmlpczN5dA=="
              target="_blank"
              rel="noopener noreferrer"
              className={style.norm_16px + " " + style.white_col}
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/vatrvel/"
              className={style.norm_16px + " " + style.white_col}
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100071157246416&mibextid=JRoKGi"
              className={style.norm_16px + " " + style.white_col}
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
