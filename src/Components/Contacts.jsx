/* import React from "react";
import diagonalArrow from "../Assets/Images/web-images/Vector28.svg";
import submitArrow from "../Assets/Images/web-images/submit-arrow.svg";
import style from "../Pages/HomePage.module.css";
export default function Contacts() {
  return (
    <div className={style.wrapper + " " + style.contact_cont}>
      <div className={style.project}>
        <h2 className={style.medium_30px}>Let's start a project</h2>
        <a href="/">
          <img src={diagonalArrow} alt="diagonal arrow" />
        </a>
      </div>
      <div className={style.contact_details}>
        <h2 className={style.medium_30px}>
          Enter your address and phone number to contact you
        </h2>
        <form className={style.inputs}>
          <input type="email" placeholder="E-mail" />
          <input type="phone" placeholder="Phone" />
          <button type="submit" className={style.submit}>
            <img src={submitArrow} alt="submit-arrow" />
          </button>
        </form>
      </div>
      <div className={style.address}>
        <h3>Azerbaijan, Baku</h3>
        <p>From Monday to</p>
        <p>Friday 10:00 - 19:00</p>
        <p>Break 13:00 - 14:00</p>
      </div>
    </div>
  );
}
 */

/* import React, { useState } from "react";
import diagonalArrow from "../Assets/Images/web-images/Vector28.svg";
import submitArrow from "../Assets/Images/web-images/submit-arrow.svg";
import style from "../Pages/HomePage.module.css";
import { useForm, ValidationError } from "@formspree/react";

export default function Contacts() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xayrnggg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone }),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
    setEmail("");
    setPhone("");
  };

  return (
    <div className={style.wrapper + " " + style.contact_cont}>
      <div className={style.project}>
        <h2 className={style.medium_30px}>Let's start a project</h2>
        <a href="/">
          <img src={diagonalArrow} alt="diagonal arrow" />
        </a>
      </div>
      <div className={style.contact_details}>
        <h2 className={style.medium_30px}>
          Enter your address and phone number to contact you
        </h2>
        <form className={style.inputs} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          <button type="submit" className={style.submit}>
            <img src={submitArrow} alt="submit-arrow" />
          </button>
        </form>
      </div>
      <div className={style.address}>
        <h3>Azerbaijan, Baku</h3>
        <p>From Monday to</p>
        <p>Friday 10:00 - 19:00</p>
        <p>Break 13:00 - 14:00</p>
      </div>
    </div>
  );
}
 */
/* import React from "react";
import { useForm } from "react-hook-form";
import diagonalArrow from "../Assets/Images/web-images/Vector28.svg";
import submitArrow from "../Assets/Images/web-images/submit-arrow.svg";
import style from "../Pages/HomePage.module.css";

function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Replace 'your-formspree-endpoint' with your actual Formspree endpoint
    const formSpreeEndpoint = "https://formspree.io/f/xayrnggg";

    try {
      const response = await fetch(formSpreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className={style.wrapper + " " + style.contact_cont}>
      <div className={style.project}>
        <h2 className={style.medium_30px}>Let's start a project</h2>
        <a href="/">
          <img src={diagonalArrow} alt="diagonal arrow" />
        </a>
      </div>
      <div className={style.contact_details}>
        <h2 className={style.medium_30px}>
          Enter your address and phone number to contact you
        </h2>
        <form className={style.inputs} onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="E-mail"
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            type="phone"
            id="phone"
            placeholder="Phone"
            {...register("message")}
          />
          <button className={style.submit} type="submit">
            <img src={submitArrow} alt="submit-arrow" />
          </button>
        </form>
      </div>
      <div className={style.address}>
        <h3>Azerbaijan, Baku</h3>
        <p>From Monday to</p>
        <p>Friday 10:00 - 19:00</p>
        <p>Break 13:00 - 14:00</p>
      </div>
    </div>
  );
}

export default Contacts;
 */
import React from "react";
import { useForm } from "react-hook-form";
import diagonalArrow from "../Assets/Images/web-images/Vector28.svg";
import submitArrow from "../Assets/Images/web-images/submit-arrow.svg";
import style from "../Pages/HomePage.module.css";

function Contacts() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formSpreeEndpoint = "https://formspree.io/f/xayrnggg";

    try {
      const response = await fetch(formSpreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        reset();
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className={style.wrapper + " " + style.contact_cont}>
      <div className={style.project}>
        <h2 className={style.medium_30px}>Let's start a project</h2>
        <a href="/">
          <img src={diagonalArrow} alt="diagonal arrow" />
        </a>
      </div>
      <div className={style.contact_details}>
        <h2 className={style.medium_30px}>
          Enter your address and phone number to contact you
        </h2>
        <form className={style.inputs} onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="E-mail"
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <input
            type="tel"
            id="phone"
            placeholder="Phone"
            {...register("phone")}
          />
          <button className={style.submit} type="submit">
            <img src={submitArrow} alt="submit-arrow" />
          </button>
        </form>
      </div>
      <div className={style.address}>
        <h3>Azerbaijan, Baku</h3>
        <p>From Monday to</p>
        <p>Friday 10:00 - 19:00</p>
        <p>Break 13:00 - 14:00</p>
      </div>
    </div>
  );
}
