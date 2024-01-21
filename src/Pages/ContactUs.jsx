import React from "react";
import Header from "../Components/Header";
import Partners from "../Components/Partners";
import Footer from "../Components/Footer";
import Buttons from "../Components/Buttons";
import ContactUsSections from "../Components/ContactUsSections";
export default function ContactUs() {
  return (
    <div>
      <Header />
      <Buttons />
      <ContactUsSections />
      <Partners />
      <Footer />
    </div>
  );
}
