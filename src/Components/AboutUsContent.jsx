import React from "react";
import homeStyle from "../Pages/HomePage.module.css";
import oldCity3 from "../Assets/Images/web-images/oldCity3.svg";
import HeydarAlCenter from "../Assets/Images/web-images/heydar-Aliyev-Center.svg";
import shirvanShahPalace from "../Assets/Images/web-images/ShirvanshahPalace.svg";

import shirvanShahPalace2 from "../Assets/Images/web-images/flames_with_shirvanshahlar.svg";
import kishChurch from "../Assets/Images/web-images/kish.svg";
import style from "../Pages/AboutUs.module.css";
export default function AboutUsContent() {
  return (
    <div className={homeStyle.wrapper}>
      <div className={style.about_us_container}>
        <div className={style.about}>
          <h1>About</h1>
          <h3>
            VAtravel (acronym of Visit (V) Azerbaijan (A)) was founded by a
            group of tour operators who put their 10+ years of experience in the
            sector together to formulate an exclusive team of professionals with
            excellent language skills and deep knowledge of tourist sites.
          </h3>
        </div>
        <div className={style.left_photo_right_text}>
          <div className={style.half_screen}>
            <img src={oldCity3} alt="Old City" />
          </div>
          <div className={style.text}>
            <p>
              VAtravel (acronym of Visit (V) Azerbaijan (A)) was founded by a
              group of tour operators who put their 10+ years of experience in
              the sector together to formulate an exclusive team of
              professionals with excellent language skills and deep knowledge of
              tourist sites.Our goal is to provide a highly professional and
              quality service. Our success has been developed on this ground
              which, in a few years, has allowed us to achieve significant
              professional results and, more importantly, maximum satisfaction
              from our customers.We offer travelers a number of services, from a
              simple support (selection and booking of hotels, support in the
              choice of restaurants and suggestions for menus, organization of
              local transport, etc.) to an overall and integrated organization
              of the visit, suggesting the most evocative destinations and the
              most important places of interest. Our mission is to help
              travelers from all around the world to experience the nature,
              culture, history and hospitality of Azerbaijan, the Land of Fire.
              To achieve it, we communicate travelers to find best solutions in
              order to meet their expectations.
            </p>
          </div>
        </div>
        <img
          className={style.shirvanShahPalace2}
          src={shirvanShahPalace2}
          alt="shirvanshahs with flames"
        />
        <div className={style.right_photo_left_text}>
          <div className={style.text}>
            <p>
              The assiduous attendance of Europeans also allows us to know the
              expectations and needs of our customers, and the fluency of
              languages they speak allows an easier interaction. Our team offers
              you professional guides who speak Italian, French, German,
              Spanish, Japanese, Korean, etc.Our vision is to become the first
              choice in Azerbaijan for business partners and tourists. We aim
              more for excellence and place the emphasis on delivering than
              promised to achieve service satisfaction, before, during and after
              the trip.Please find below some of our services, and do let us
              know should you need any further information or guidance:
              <br />
              <ul>
                <li> -Cultural trips</li>
                <li>-ECO tours</li>
                <li>-Sports and Events </li>
                <li>-Care and Wellness-</li>
                <li> -Customized trips</li>
                <li>-Guide service</li>
                <li>-Hotel reservation</li>
                <li>-Transport service</li>
                <li>-Entry Visa Support (E-VISA)</li>
              </ul>
            </p>
          </div>
          <div className={style.about_us_photo_cont + " " + style.half_screen}>
            <div className={style.up_down_first}>
              <img src={HeydarAlCenter} alt="Heydar Aliyev Center" />
            </div>
            <div className={style.up_down}>
              <img src={kishChurch} alt="Kish Church" />
              <img src={shirvanShahPalace} alt="ShirvanShahs Palace" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
