import "./Footer.css";
import { useState, useEffect } from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlusG,
  FaStar,
} from "react-icons/fa";

function Footer() {
  const reviews = [
    {
      image: "/footer/review1.webp",
      name: "Rohit Bansal",
      text: "Thank you Incredible Holidays team, special Thanks to Leya who helped us in customozing our Thailand trip and taking care of all our requirements, it was wonderful experience and my family really enjoyed. everything was very well organised once we reach there and till drop to airport!"
    },
    {
      image: "/footer/review2.webp",
      name: "Neha Agarwal",
      text: "Thank you Leya and Incredible Holidays for planning our Singapore trip. Inspite of small initial hiccup ( which was handled quite responsibly) everything went smooth... All the transportation were bang on time. We had an amazing experience!! Team is quite responsive...."
    },
    {
      image: "/footer/review3.webp",
      name: "Aman Soni",
      text: "Went on a trip to Kashmir with friends and family and it was an amazing experience! Thank you Incredible Holidays for planning our trip. Kashmir is very safe and a must visit for all."
    },
    {
      image: "/footer/review4.webp",
      name: "Supriya Ghule",
      text: "We travelled to Vietnam in a group of 8 through incredible holidays.It was our first trip with Incredible holidays and was wonderful experience.Wvweything went well as per the itinerary and the hotels selected were very good.Thanks to the team."
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === reviews.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-section">

      <div className="footer-content">

        <div className="footer-left">

          <img
            src="/footer/logo-white.png"
            alt="Incredible Holidays"
            className="footer-logo"
          />

          <div className="footer-line"></div>

          <p className="footer-description">
            We believe that travel is more than just a journey;
            it’s an experience of a lifetime. Specializing in
            luxury travel packages, we are dedicated to creating
            tailor-made trips that offer unparalleled comfort,
            exclusivity, and personalized service. With our team
            of travel experts and a commitment to excellence,
            Incredible Holidays transforms every trip into an
            unforgettable adventure.
          </p>

          {/* <div className="footer-socials">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaGooglePlusG />
            </a>

          </div>

        </div> */}
        <div className="footer-socials">

  <a
    href="https://www.facebook.com/incredibleholidayspune/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.instagram.com/travelwithincredible/?hl=en"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.linkedin.com/company/biztrav-india/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUQ5cXRiQnFBRRAB!2m1!1s0x0:0x16774edc1044c6ca!3m1!1s2@1:CIHM0ogKEICAgID9qtbBqAE%7CCgsInuvQrwYQiM_Mew%7C?hl=en-GB&source=sh/x/kp/local/m1/0&kgs=54bd2080e72bbecb"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGooglePlusG />
  </a>

</div>
</div>

        <div className="footer-right">

          <div className="review-card" key={current}>

            <div className="quote">
              ❞
            </div>

            <p>
              {reviews[current].text}
            </p>

            <div className="review-stars">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>

          </div>

          <div className="review-profile">

            <img
              src={reviews[current].image}
              alt={reviews[current].name}
            />

            <h4>
              {reviews[current].name}
            </h4>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          Copyright © 2026. Incredible Holidays |
          All Rights Reserved.
        </p>

        <div className="footer-links">

          <a href="#">
            Terms & Conditions
          </a>

          <a href="#">
            Privacy Policy
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;