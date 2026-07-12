import "./AboutSection.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-container">

        <div className="about-image-wrapper">

          <img
            src="/about/about-section.png"
            alt="About Incredible Holidays"
            className="about-image"
          />

        </div>

        <div className="about-content">

          <span className="about-tag">
            ABOUT US
          </span>

          <h2 className="about-title">
            Experience Luxury Travel, Tailored
            Just for You
          </h2>

          <p className="about-description">
            We understand the value of your time; your holiday is more than just
            a trip; it’s an experience. Instead of a prefixed buffet tour with
            generic activities, we curate personalized journeys that truly
            resonate with you. Our dedicated team designs exclusive, à la carte
            experiences, ensuring luxury, comfort, and unforgettable memories.
            Travel the world, your way!
          </p>

          <div className="typing-box">

            <TypeAnimation
              sequence={[
                "Looking For Cheap Travel Booking? No!",
                2000,

                "",
                500,

                "Memorable Travel Experiences? Yes!",
                2000,

                "",
                500,

                "Generic Packages? No!",
                2000,

                "",
                500,

                "Luxury Tailored Holidays? Yes!",
                2000,

                "",
                500,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              cursor={true}
            />

          </div>

          <Link to="/contact" className="learn-more-btn">
  Learn More
</Link>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;