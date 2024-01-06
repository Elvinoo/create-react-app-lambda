import style from "../Pages/HomePage.module.css";
import rightArrow from "../Assets/Images/web-images/Vector5.svg";

const MainTour = ({ tours }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.flex_justify_btw + " " + style.main_tour_head}>
        <h1 className={style.bold_40px}>Tours</h1>
        <div className={style.show_all}>
          <a href="/tours">
            <span className={style.medium_14px}>Show all </span>

            <img src={rightArrow} alt="show-all" />
          </a>
        </div>
      </div>
      <div className={style.tour_card_cont}>
        {tours.map((tour) => (
          <div className={style.tour_card} key={tour.id}>
            <img src={"./images/" + tour.imagelink} alt={tour.name} />
            <div className="tour-desc-container">
              <h3 className="tour-name">{tour.name}</h3>
              <p className="tour-desc">{tour.desc}</p>
              <p className="tour-duration">
                {tour.days} days {tour.nights} nights
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainTour;
