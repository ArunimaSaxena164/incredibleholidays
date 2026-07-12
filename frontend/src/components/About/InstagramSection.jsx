import "./InstagramSection.css";
import { FaInstagram } from "react-icons/fa";

function InstagramSection() {
  return (
    <section className="instagram-section">

      <div className="instagram-grid">

        <a
          href="https://www.instagram.com/travelwithincredible/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="instagram-card"
        >
          <img src="/pageAbout/instagram1.jpg" alt="" />

          <div className="instagram-overlay">
            <FaInstagram />
            <span>Read More »</span>
          </div>
        </a>

        <a
          href="https://www.instagram.com/travelwithincredible/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="instagram-card"
        >
          <img src="/pageAbout/instagram2.jpg" alt="" />

          <div className="instagram-overlay">
            <FaInstagram />
            <span>Read More »</span>
          </div>
        </a>

        <div className="instagram-center">

          <FaInstagram className="instagram-center-icon" />

          <h2>
            Follow Our
            <br />
            Instagram
          </h2>

          <div className="instagram-line"></div>

          <h4>Make A Call</h4>

          <a href="tel:+917767803692">
            +91-7767803692
          </a>

        </div>

        <a
          href="https://www.instagram.com/travelwithincredible/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="instagram-card"
        >
          <img src="/pageAbout/instagram3.jpg" alt="" />

          <div className="instagram-overlay">
            <FaInstagram />
            <span>Read More »</span>
          </div>
        </a>

        <a
          href="https://www.instagram.com/travelwithincredible/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="instagram-card"
        >
          <img src="/pageAbout/instagram4.png" alt="" />

          <div className="instagram-overlay">
            <FaInstagram />
            <span>Read More »</span>
          </div>
        </a>

      </div>

    </section>
  );
}

export default InstagramSection;