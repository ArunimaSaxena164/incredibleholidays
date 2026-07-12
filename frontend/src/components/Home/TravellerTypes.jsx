import "./TravellerTypes.css";
import { useState, useEffect } from "react";

import {
FaSuitcaseRolling,
FaCameraRetro,
FaUsers,
} from "react-icons/fa";

function TravellerTypes() {

const images = [
"/traveller-types/photo1.webp",
"/traveller-types/photo2.webp",
"/traveller-types/photo3.webp",
"/traveller-types/photo4.webp",
];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {


const interval = setInterval(() => {

  setCurrentImage((prev) =>
    prev === images.length - 1
      ? 0
      : prev + 1
  );

}, 5000);

return () => clearInterval(interval);


}, []);

const travellerData = [


{
  icon: <FaSuitcaseRolling />,
  title: "Not for Bargain Hunters:",
  description:
    "If you're only looking to book the cheapest flight or hotel, we might not be the right fit. We believe in value over price and experiences over transactions.",
},

{
  icon: <FaCameraRetro />,
  title: "For Experience Seekers:",
  description:
    "If you want more than just a trip; curated stays in exclusive resorts, expert suggestions on destinations, and a touch of magic for special occasions like birthdays, anniversaries and honeymoons.",
},

{
  icon: <FaUsers />,
  title: "Your Personal Travel Expert:",
  description:
    "Get the service of a dedicated travel consultant; your single point of contact who handles every detail and ensures everything runs seamlessly.",
},


];

return (


<section className="traveller-section">

  <img
    src="/traveller-types/planeup.png"
    alt=""
    className="plane-top"
  />

  <img
    src="/traveller-types/planeup.png"
    alt=""
    className="plane-bottom"
  />

  <div className="traveller-grid">

    <div className="traveller-left">

      <div className="image-frame">

        <img
          key={currentImage}
          src={images[currentImage]}
          alt="Traveller"
          className="traveller-slide"
        />

      </div>

    </div>

    <div className="traveller-right">

      <span className="traveller-tag">
        TRAVELER TYPES
      </span>

      <h2 className="traveller-title">
        Who Should Travel with Incredible Holidays?
      </h2>

      <p className="traveller-intro">
        At Incredible Holidays, we do not just sell holidays;
        we craft experiences. Here’s who we are perfect for:
      </p>

      {travellerData.map((item, index) => (

        <div
          className="traveller-item"
          key={index}
        >

          <div className="traveller-icon">
            {item.icon}
          </div>

          <div className="traveller-text">

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


);
}

export default TravellerTypes;
