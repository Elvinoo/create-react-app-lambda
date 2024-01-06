import React from "react";
import diagonalArrow from "../Assets/Images/web-images/Vector28.svg";
import submitArrow from "../Assets/Images/web-images/submit-arrow.svg";
import style from "../Pages/HomePage.module.css";
export default function Contacts() {
  return (
    <div className={style.wrapper + " " + style.contact_cont}>
      <div className={style.project}>
        <h2 className={style.medium_30px}>Let's start a project</h2>
        <a href="/">
          <img src={diagonalArrow} alt="diagonal arrow" />
        </a>
      </div>
      <div className={style.contact_details}>
        <h2 className={style.medium_30px}>
          Enter your address and phone number to contact you
        </h2>
        <form className={style.inputs}>
          <input type="email" placeholder="E-mail" />
          <input type="phone" placeholder="Phone" />
          <button type="submit" className={style.submit}>
            <img src={submitArrow} alt="submit-arrow" />
          </button>
        </form>
      </div>
      <div className={style.address}>
        <h3>Azerbaijan, Baku</h3>
        <p>From Monday to</p>
        <p>Friday 10:00 - 19:00</p>
        <p>Break 13:00 - 14:00</p>
      </div>
    </div>
  );
}
