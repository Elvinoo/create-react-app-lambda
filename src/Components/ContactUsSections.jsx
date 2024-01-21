/* import React from "react";
import { useForm } from "react-hook-form";
import submitArrow from "../Assets/Images/web-images/submit-arrow.svg";
import style from "../Pages/ContactUs.module.css";
import mailIcon from "../Assets/Images/web-images/mail.svg";
import phonIcon from "../Assets/Images/web-images/phone.svg";
import locationIcon from "../Assets/Images/web-images/location.svg";
export default function ContactUsSections() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formSpreeEndpoint = "https://formspree.io/f/mvoezord";

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
    <div className={style.wrapper}>
      <div className={style.contact_us_container}>
        <div className={style.left}>
          <h1>Contact us</h1>
          <h3>
            Connect with us for any inquiries or assistance. We're here to help!
          </h3>
          <div className={style.contact_info}>
            <span>
              <img src={locationIcon} alt="Location icon" />
            </span>
            <p>Azerbaijan, Baku</p>
          </div>
          <div className={style.contact_info}>
            <span>
              <img src={phonIcon} alt="Phone Icon" />
            </span>
            <p>+994 51 585 55 64</p>
          </div>
          <div className={style.contact_info}>
            <span>
              <img src={mailIcon} alt="Mail Icon" />
            </span>
            <p>incoming@vatravel.az</p>
          </div>
        </div>
        <div className={style.right}>
          <h2>Enter your address and phone number to contact you</h2>
          <form
            className={style.contact_us_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={style.inputs}>
              <input
                type="text"
                placeholder="Name & Surname"
                id="name-surname"
              />
              <input type="text" placeholder="Country" id="country" />
            </div>
            <div className={style.inputs}>
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
            </div>
            <div className={style.inputs}>
              <input
                id="note"
                type="text"
                placeholder="Please write if you have additional notes."
              />
              <button className={style.submit} type="submit">
                <img src={submitArrow} alt="submit-arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
 */
import React from "react";
import { useForm } from "react-hook-form";
import submitArrow from "../Assets/Images/web-images/submit-arrow.svg";
import style from "../Pages/ContactUs.module.css";
import mailIcon from "../Assets/Images/web-images/mail.svg";
import phonIcon from "../Assets/Images/web-images/phone.svg";
import locationIcon from "../Assets/Images/web-images/location.svg";

function ContactUsSections() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formSpreeEndpoint = "https://formspree.io/f/mvoezord";

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
    <div className={style.wrapper}>
      <div className={style.contact_us_container}>
        <div className={style.left}>
          <h1>Contact us</h1>
          <h3>
            Connect with us for any inquiries or assistance. We're here to help!
          </h3>
          <div className={style.contact_info}>
            <span>
              <img src={locationIcon} alt="Location icon" />
            </span>
            <p>Azerbaijan, Baku</p>
          </div>
          <div className={style.contact_info}>
            <span>
              <img src={phonIcon} alt="Phone Icon" />
            </span>
            <p>+994 51 585 55 64</p>
          </div>
          <div className={style.contact_info}>
            <span>
              <img src={mailIcon} alt="Mail Icon" />
            </span>
            <p>incoming@vatravel.az</p>
          </div>
        </div>
        <div className={style.right}>
          <h2>Enter your address and phone number to contact you</h2>
          <form
            className={style.contact_us_form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={style.inputs}>
              <input
                type="text"
                id="name-surname"
                placeholder="Name & Surname"
                {...register("name")}
              />

              <input
                type="text"
                id="country"
                placeholder="Country"
                {...register("country")}
              />
            </div>
            <div className={style.inputs}>
              <input
                placeholder="E-mail"
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
              />
              <input
                placeholder="Phone"
                type="tel"
                id="phone"
                {...register("phone")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className={style.inputs}>
              <input
                placeholder="Additional Notes"
                type="text"
                id="note"
                {...register("note")}
              />
              <button className={style.submit} type="submit">
                <img src={submitArrow} alt="submit-arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSections;
