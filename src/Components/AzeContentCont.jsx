import React, { useState, useEffect } from "react";
import homeStyle from "../Pages/HomePage.module.css";
import style from "../Pages/AboutAze.module.css";
import AzeContentMobile from "./AzeContentMobile";
import AzeContentWeb from "./AzeContentWeb";
export default function AzeContentCont() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={homeStyle.wrapper}>
      <div className={style.about_aze}>
        <h3 className={homeStyle.medium_20px}>
          Azerbaijan, officially the Republic of Azerbaijan, is the state
          located in the Caucasus region. Rich in oil, the country is located in
          Asia Transcaucasia, south of the mountainous watershed that separates
          it conventionally from Europe.
        </h3>
        {isMobile ? <AzeContentMobile /> : <AzeContentWeb />}
      </div>
    </div>
  );
}
