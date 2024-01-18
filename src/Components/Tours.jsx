import React, { useState } from "react";
import style from "../Pages/HomePage.module.css";
import tourStyle from "../Pages/Tours.module.css";
import MainImage from "../Assets/Images/web-images/toursPage1.svg";

import tour1 from "../Assets/Images/web-images/tour1.svg";
import tour2 from "../Assets/Images/web-images/tour2.svg";
import tour3 from "../Assets/Images/web-images/tour3.svg";
import tour4 from "../Assets/Images/web-images/tour4.svg";
import tour5 from "../Assets/Images/web-images/tour5.svg";
import tour6 from "../Assets/Images/web-images/tour1.svg";
import tour7 from "../Assets/Images/web-images/tour2.svg";
import tour8 from "../Assets/Images/web-images/tour8.svg";

const Tours = ({ tours }) => {
  const [selectedType, setSelectedType] = useState("all");

  const filteredTours =
    selectedType === "all"
      ? tours
      : tours.filter((tour) => tour.type.includes(selectedType));

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const imageMap = {
    0: tour1,
    1: tour2,
    2: tour3,
    3: tour4,
    4: tour5,
    5: tour6,
    6: tour7,
    7: tour8,
  };

  return (
    <div className={tourStyle.container}>
      <div className={tourStyle.mainImage}>
        <img src={MainImage} alt="Tour Page " />
      </div>
      <div className={style.wrapper}>
        <div className={tourStyle.selection_container}>
          <ul className={tourStyle.tours_selection}>
            <li
              className={`${tourStyle.li} ${
                selectedType === "all" && tourStyle.selected
              }`}
              onClick={() => handleTypeChange("all")}
            >
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="8" r="7" stroke="black" />
              </svg>
              <span>All Tours</span>
            </li>
            <li
              className={`${tourStyle.li} ${
                selectedType === "cultural" && tourStyle.selected
              }`}
              onClick={() => handleTypeChange("cultural")}
            >
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="8" r="7" stroke="black" />
              </svg>
              <span>Cultural Tours</span>
            </li>
            <li
              className={`${tourStyle.li} ${
                selectedType === "eco" && tourStyle.selected
              }`}
              onClick={() => handleTypeChange("eco")}
            >
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="8" r="7" stroke="black" />
              </svg>
              <span>Eco Tours</span>
            </li>
            <li
              className={`${tourStyle.li} ${
                selectedType === "sport" && tourStyle.selected
              }`}
              onClick={() => handleTypeChange("sport")}
            >
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="8" r="7" stroke="black" />
              </svg>
              <span>Sport & Event</span>
            </li>
            <li
              className={`${tourStyle.li} ${
                selectedType === "health" && tourStyle.selected
              }`}
              onClick={() => handleTypeChange("health")}
            >
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="8" r="7" stroke="black" />
              </svg>
              <span>Health & Wellness</span>
            </li>
          </ul>
        </div>
        <div className={style.tour_card_cont}>
          {filteredTours.map((tour) => (
            <div className={style.tour_card} key={tour.id}>
              <img src={imageMap[tour.id]} alt={tour.name} />
              <div className={style.tour_desc_container}>
                <h3 className={`${style.medium_30px} ${style.mrgn_btm_12px}`}>
                  {tour.name}
                </h3>
                <p
                  className={`${style.mrgn_btm_12px} ${style.medium_14px} ${style.gray}`}
                >
                  {tour.desc}
                </p>
                <a
                  href={`/tours/${tour.desc}`}
                  className={`${style.gray} ${style.tour_duration}`}
                >
                  {tour.days} days {tour.nights} nights
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
