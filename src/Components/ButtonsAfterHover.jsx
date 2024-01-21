import React from "react";
import style from "../Pages/HomePage.module.css";
import cancelButton from "../Assets/Images/web-images/cancel_button.svg";

const ButtonsAfterHover = ({ handleHoverOut }) => {
  return (
    <div className={style.buttons_after_hover}>
      <button className={style.btn + " " + style.home}>Home</button>

      <div className={style.hover_menu}>
        <ul className={style.menu_hover} onMouseLeave={handleHoverOut}>
          <div className={style.li_with_btn}>
            <li className={style.li}>
              <a href="/azerbaijan">About Azerbaijan</a>
            </li>
            <img
              className={style.cancelButton}
              src={cancelButton}
              onClick={handleHoverOut}
              alt="cancel-button"
            />
          </div>
          <li className={style.li}>
            <a href="/about-us">About Us</a>
          </li>
          <li className={style.li}>
            <a href="/tours">Tours</a>
          </li>

          <li className={style.li}>
            <a href="/contacts">Contact Us</a>
          </li>
        </ul>
        <div className={style.mob_hover_menu}>
          <a href="www.instagram.com">
            <h6>Instagram</h6>
          </a>
          <a href="www.linkedin.com">
            <h6>Linkedin</h6>
          </a>
          <a href="www.facebook.com">
            <h6>Facebook</h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ButtonsAfterHover;
