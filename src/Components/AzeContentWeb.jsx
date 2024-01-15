/* import React, { useState, useRef } from "react";
import oldCity2 from "../Assets/Images/web-images/old-city2.svg";
import { aboutAze } from "../Data";

import style from "../Pages/AboutAze.module.css";
export default function AzeContentWeb() {
  const mainInfoRef = useRef(null);
  const [selectedKeyIndex, setSelectedKeyIndex] = useState(0);

  const handleAClick = (index) => {
    setSelectedKeyIndex(index);
    const element = mainInfoRef.current.children[index];
    const offset = element.offsetTop - mainInfoRef.current.offsetTop;
    mainInfoRef.current.scrollTop = offset;
    console.log("Scrolling to:", index, "Offset:", offset);
  };
  return (
    <div className={style.info_with_photo}>
      <div className={style.gen_info}>
        {aboutAze.map((item, index) => (
          <a
            key={item.key}
            onClick={() => handleAClick(index)}
            data-key={item.key}
            className={`${style.navLink} ${
              index === selectedKeyIndex ? style.selected : ""
            }`}
          >
            {item.key}
          </a>
        ))}
      </div>
      <div
        ref={mainInfoRef}
        className={`${style.main_info} ${style.smoothScroll}`}
      >
        {aboutAze.map((item, index) => (
          <div className={style.itemKeysValue} key={item.key}>
            {index !== 0 && <br />} <h2>{item.key}</h2>
            <br />
            <p>{item.value}</p>
          </div>
        ))}
      </div>
      <div>
        <img className={style.oldCity2} src={oldCity2} alt="old city" />
      </div>
    </div>
  );
}
 */
import React, { useState, useRef } from "react";
import oldCity2 from "../Assets/Images/web-images/old-city2.svg";
import { aboutAze } from "../Data";

import style from "../Pages/AboutAze.module.css";

export default function AzeContentWeb() {
  const mainInfoRef = useRef(null);
  const [selectedKeyIndex, setSelectedKeyIndex] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedKeyIndex(index);
    const element = mainInfoRef.current.children[index];
    const offset = element.offsetTop - mainInfoRef.current.offsetTop;
    mainInfoRef.current.scrollTop = offset;
    console.log("Scrolling to:", index, "Offset:", offset);
  };

  return (
    <div className={style.info_with_photo}>
      <div className={style.gen_info}>
        {aboutAze.map((item, index) => (
          <button
            key={item.key}
            onClick={() => handleButtonClick(index)}
            className={`${style.navLink} ${
              index === selectedKeyIndex ? style.selected : ""
            }`}
          >
            {item.key}
          </button>
        ))}
      </div>
      <div
        ref={mainInfoRef}
        className={`${style.main_info} ${style.smoothScroll}`}
      >
        {aboutAze.map((item, index) => (
          <div className={style.itemKeysValue} key={item.key}>
            {index !== 0 && <br />} <h2>{item.key}</h2>
            <br />
            <p>{item.value}</p>
          </div>
        ))}
      </div>
      <div>
        <img className={style.oldCity2} src={oldCity2} alt="old city" />
      </div>
    </div>
  );
}
