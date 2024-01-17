import React from "react";
import Header from "../Components/Header";
import Partners from "../Components/Partners";
import Contacts from "../Components/Contacts";
import Footer from "../Components/Footer";
import Buttons from "../Components/Buttons";
import PhotoContainer from "../Components/PhotoContainer";
import AzeContentCont from "../Components/AzeContentCont";
import governmentHouse from "../Assets/Images/web-images/government-house.svg";
import maidenTower from "../Assets/Images/web-images/maiden-tower.svg";
import aliyevCenter from "../Assets/Images/web-images/h-aliyev-center.svg";
import panorama from "../Assets/Images/web-images/panorama.svg";
import candyCane from "../Assets/Images/web-images/candy-cane.svg";
import caravanserai from "../Assets/Images/web-images/carevansaray.svg";
import panorama1 from "../Assets/Images/web-images/panorama2.svg";
import literatureMuseum from "../Assets/Images/web-images/literature-museum.svg";
export default function AboutAze() {
  const images = [
    governmentHouse,
    maidenTower,
    aliyevCenter,
    panorama,
    candyCane,
    caravanserai,
    literatureMuseum,
    panorama1,
  ];
  return (
    <div>
      <Header />
      <PhotoContainer images={images} />
      <AzeContentCont />
      <Buttons />
      <Partners />
      <Contacts />
      <Footer />
    </div>
  );
}
