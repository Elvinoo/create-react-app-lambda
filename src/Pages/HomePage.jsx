import React from "react";
import style from "./HomePage.module.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ShirvanshahMosque from "../Assets/Images/web-images/shirvanshah-mosque.svg";
import Buttons from "../Components/Buttons";
import MainTour from "../Components/MainTour";
import { tours } from "../Data";
import Partners from "../Components/Partners";
import Project from "../Components/Contacts";
export default function HomePage() {
  return (
    <>
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
        <MainTour tours={tours.slice(0, 3)} />
        <Partners />
        <Project />
        <Footer />
      </div>
    </>
  );
}
