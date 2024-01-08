import React from "react";
import Header from "../Components/Header";
import Partners from "../Components/Partners";
import Contacts from "../Components/Contacts";
import Footer from "../Components/Footer";
import Buttons from "../Components/Buttons";
import AzePhotoCont from "../Components/AzePhotoCont";
import AzeContentCont from "../Components/AzeContentCont";

export default function AboutAze() {
  return (
    <div>
      <Header />
      <AzePhotoCont />
      <AzeContentCont />
      <Buttons />
      <Partners />
      <Contacts />
      <Footer />
    </div>
  );
}
