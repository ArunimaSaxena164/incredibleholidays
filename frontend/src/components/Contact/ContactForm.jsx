import "./ContactForm.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlusG
} from "react-icons/fa";

function ContactFormSection() {
  return (
    <section className="contact-form-section">

      {/* LEFT */}

      <div className="contact-info-card">

        <span className="contact-small-title">
          CONTACT US
        </span>

        <h2>
          Need Assistance? Get in Touch –
          We’re Always Here to Help!
        </h2>

        <p className="contact-description">
          We are committed to providing you with the best service
          and support. Whether you have questions about your booking,
          need special arrangements, or require any assistance,
          our friendly team is just a call or message away.
        </p>

        <h3 className="contact-subheading">
          Our Contact
        </h3>

        <div className="contact-detail">

          <div className="contact-icon">
            <FaEnvelope />
          </div>

          <div>
            <h4>Email Address</h4>
            <p>bookings@incredibleasia.in</p>
          </div>

        </div>

        <div className="contact-detail">

          <div className="contact-icon">
            <FaPhoneAlt />
          </div>

          <div>
            <h4>Call Us</h4>
            <p>+91-7767803692</p>
          </div>

        </div>

        <div className="contact-detail">

          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>

          <div>
            <h4>Address</h4>

            <p>
              Office No. 512 | Gera Imperium Alpha,
              Kharadi, Pune – 411014, India
            </p>

          </div>

        </div>

        <h3 className="contact-subheading social-heading">
          Social Media
        </h3>

        <div className="contact-socials">

          <a href="https://www.facebook.com/incredibleholidayspune/">
            <FaFacebookF />
          </a>

          <a href="https://www.instagram.com/travelwithincredible/?hl=en">
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/company/biztrav-india/">
            <FaLinkedinIn />
          </a>

          <a href="https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUQ5cXRiQnFBRRAB!2m1!1s0x0:0x16774edc1044c6ca!3m1!1s2@1:CIHM0ogKEICAgID9qtbBqAE%7CCgsInuvQrwYQiM_Mew%7C?hl=en-GB&source=sh/x/kp/local/m1/0&kgs=54bd2080e72bbecb">
            <FaGooglePlusG />
          </a>

        </div>

      </div>

      {/* RIGHT */}

      <div className="trip-form-card">

        <h2>
          Plan Your Trip
        </h2>

        <p className="trip-form-note">
          Your email address will not be published.
          Required fields are marked *
        </p>

        <form>

          <div className="form-grid">

            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <label>Mobile Number *</label>
              <input
                type="tel"
                placeholder="Mobile Number"
              />
            </div>

            <div className="form-group">
              <label>Destination Interested *</label>
              <input
                type="text"
                placeholder="Destination"
              />
            </div>

            <div className="form-group">
              <label>Travel Dates *</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Number of Travelers *</label>
              <input
                type="number"
                placeholder="Number"
              />
            </div>

          </div>

          <div className="form-group full-width">

            <label>Special Requests</label>

            <textarea
              rows="7"
              placeholder="Message"
            />

          </div>

          <button
            type="submit"
            className="trip-submit-btn"
          >
            SUBMIT
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactFormSection;