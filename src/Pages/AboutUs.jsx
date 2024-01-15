import React from "react";
import Header from "../Components/Header";
import Contacts from "../Components/Contacts";
import Footer from "../Components/Footer";
import Buttons from "../Components/Buttons";
import AboutUsContent from "../Components/AboutUsContent";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <AboutUsContent />
      <Buttons />
      <Contacts />
      <Footer />
    </div>
  );
}
