// MainTour.js
import React from "react";
import style from "../Pages/HomePage.module.css";
import rightArrow from "../Assets/Images/web-images/Vector5.svg";

const MainTour = ({ tours, initialDisplayCount, onShowMore }) => {
  const displayedTours = tours.slice(0, initialDisplayCount);

  const showMoreButtonLabel =
    tours.length > initialDisplayCount ? "Show more" : "Show less";

  return (
    <div className={style.wrapper}>
      <div className={style.flex_justify_btw + " " + style.main_tour_head}>
        <h1 className={style.bold_40px}>Tours</h1>
        <div className={style.show_all}>
          <a href="/tours">
            <span className={style.medium_14px + " " + style.mob_no}>
              Show all{" "}
            </span>
            <img src={rightArrow} alt="show-all" />
          </a>
        </div>
      </div>
      <div className={style.tour_card_cont}>
        {displayedTours.map((tour) => (
          <div className={style.tour_card} key={tour.id}>
            <img src={"./images/" + tour.imagelink} alt={tour.name} />
            <div className={style.tour_desc_container}>
              <h3 className={style.medium_30px + " " + style.mrgn_btm_12px}>
                {tour.name}
              </h3>
              <p
                className={
                  style.mrgn_btm_12px +
                  " " +
                  style.medium_14px +
                  " " +
                  style.gray
                }
              >
                {tour.desc}
              </p>
              <p className={style.gray + " " + style.tour_duration}>
                {tour.days} days {tour.nights} nights
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className={style.showMoreButton} onClick={onShowMore}>
        {showMoreButtonLabel}
      </button>
    </div>
  );
};

export default MainTour;
