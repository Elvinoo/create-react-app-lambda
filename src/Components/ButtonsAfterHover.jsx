import style from "../Pages/HomePage.module.css";
/* import ellipse from "../Assets/Images/web-images/Ellipse1.svg"; */
const ButtonsAfterHover = ({ handleHoverOut }) => {
  return (
    <div className={style.buttons_after_hover}>
      <button className={style.btn + " " + style.home}>Home</button>

      <ul class={style.menu_hover} onMouseLeave={handleHoverOut}>
        <li className={style.li}>
          <a href="/azerbaijan">About Azerbaijan</a>
        </li>
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
    </div>
  );
};

export default ButtonsAfterHover;
