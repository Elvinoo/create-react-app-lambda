import React from "react";
import style from "../Pages/AboutAze.module.css";

export default function AzePhotoCont({ images }) {
  return (
    <div className={style.photo_container}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`#${index}`} />
      ))}
    </div>
  );
}
