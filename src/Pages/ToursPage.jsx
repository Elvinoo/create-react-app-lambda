import React from "react";
import Header from "../Components/Header";
import Contacts from "../Components/Contacts";
import Footer from "../Components/Footer";
import Buttons from "../Components/Buttons";
import { tours } from "../Data";
import Tours from "../Components/Tours";
import style from "../Pages/HomePage.module.css";
export default function ToursPage() {
  return (
    <div className={style.container}>
      <Header />
      <Tours tours={tours} />
      <Buttons />
      <Contacts />
      <Footer />
    </div>
  );
}
