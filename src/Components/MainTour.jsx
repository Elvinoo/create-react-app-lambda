import React from "react";
import style from "../Pages/HomePage.module.css";
import rightArrow from "../Assets/Images/web-images/Vector5.svg";
import tour1 from "../Assets/Images/web-images/tour1.svg";
import tour2 from "../Assets/Images/web-images/tour2.svg";
import tour3 from "../Assets/Images/web-images/tour3.svg";
import tour4 from "../Assets/Images/web-images/tour4.svg";
import tour5 from "../Assets/Images/web-images/tour5.svg";
import tour6 from "../Assets/Images/web-images/tour1.svg";
import tour7 from "../Assets/Images/web-images/tour2.svg";
import tour8 from "../Assets/Images/web-images/tour8.svg";

const MainTour = ({ tours, initialDisplayCount, onShowMore }) => {
  const displayedTours = tours.slice(0, initialDisplayCount);

  const showMoreButtonLabel =
    tours.length > initialDisplayCount ? "Show more" : "Show less";
  const imageArray = [tour1, tour2, tour3, tour4, tour5, tour6, tour7, tour8];

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
        {displayedTours.map((tour, index) => (
          <div className={style.tour_card} key={tour.id}>
            <img src={imageArray[index]} alt={tour.name} />
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
              <a
                href={"/tours/" + tour.desc}
                className={style.gray + " " + style.tour_duration}
              >
                {tour.days} days {tour.nights} nights
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className={style.show}>
        {onShowMore && (
          <button className={style.showMoreButton} onClick={onShowMore}>
            {showMoreButtonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default MainTour;
