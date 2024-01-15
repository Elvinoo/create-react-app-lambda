import React from "react";
import style from "../Pages/AboutAze.module.css";
import governmentHouse from "../Assets/Images/web-images/government-house.svg";
import maidenTower from "../Assets/Images/web-images/maiden-tower.svg";
import aliyevCenter from "../Assets/Images/web-images/h-aliyev-center.svg";
import panorama from "../Assets/Images/web-images/panorama.svg";
import candyCane from "../Assets/Images/web-images/candy-cane.svg";
import caravanserai from "../Assets/Images/web-images/carevansaray.svg";
import literatureMuseum from "../Assets/Images/web-images/literature-museum.svg";
import panorama1 from "../Assets/Images/web-images/panorama2.svg";

export default function AzePhotoCont() {
  return (
    <div className={style.photo_container}>
      <img
        src={governmentHouse}
        className={style.slide}
        alt=" Government House"
      />
      <img src={maidenTower} className={style.slide} alt="Maiden Tower" />
      <img
        src={aliyevCenter}
        className={style.slide}
        alt="Heydar Aliyev Center"
      />
      <img src={panorama} className={style.slide} alt="panorama" />
      <img src={candyCane} className={style.slide} alt="candy cane mountain" />
      <img src={caravanserai} className={style.slide} alt="caravanserai" />
      <img
        src={literatureMuseum}
        className={style.slide}
        alt="literature-museum"
      />
      <img src={panorama1} className={style.slide} alt="panorama1" />
    </div>
  );
}
