// HomePage.js
import React, { useState } from "react";
import style from "./HomePage.module.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ShirvanshahMosque from "../Assets/Images/web-images/shirvanshah-mosque.svg";
import Buttons from "../Components/Buttons";
import MainTour from "../Components/MainTour";

import { tours } from "../tours.json";
import Partners from "../Components/Partners";
import Project from "../Components/Contacts";

export default function HomePage() {
  const [initialDisplayCount, setInitialDisplayCount] = useState(3);
  const handleShowMoreLess = () => {
    if (initialDisplayCount < tours.length) {
      setInitialDisplayCount((prevCount) =>
        Math.min(prevCount + 3, tours.length)
      );
    } else {
      setInitialDisplayCount(3);
    }
  };

  return (
    <div className={style.container}>
      <Header />
      <div>
        <img
          className={style.img}
          src={ShirvanshahMosque}
          alt="shirvanshah-mosque"
        />
      </div>
      <Buttons />
      <MainTour
        tours={tours}
        initialDisplayCount={initialDisplayCount}
        onShowMore={handleShowMoreLess} // Corrected prop name
      />
      <Partners />
      <Project />
      <Footer />
    </div>
  );
}

/* import React, { useState, useEffect } from "react";
import style from "./HomePage.module.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ShirvanshahMosque from "../Assets/Images/web-images/shirvanshah-mosque.svg";
import ShirvanshahMosque2 from "../Assets/Images/web-images/shirvanshah-mosque.svg";
import flames from "../Assets/Images/web-images/flames_from_distance.svg";
import Buttons from "../Components/Buttons";
import MainTour from "../Components/MainTour";
import { tours } from "../Data";

import Partners from "../Components/Partners";
import Project from "../Components/Contacts";

const images = [ShirvanshahMosque, flames, ShirvanshahMosque2];

export default function HomePage() {
  const [initialDisplayCount, setInitialDisplayCount] = useState(3);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleShowMoreLess = () => {
    if (initialDisplayCount < tours.length) {
      setInitialDisplayCount((prevCount) =>
        Math.min(prevCount + 2, tours.length)
      );
    } else {
      setInitialDisplayCount(3);
    }
  };

  useEffect(() => {
    // Set up a timer to change the image every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clean up the timer on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={style.container}>
      <Header />
      <div>
        <img
          className={style.img}
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
      <Buttons />
      <MainTour
        tours={tours}
        initialDisplayCount={initialDisplayCount}
        onShowMore={handleShowMoreLess}
      />
      <Partners />
      <Project />
      <Footer />
    </div>
  );
} */
