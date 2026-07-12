import "./ContactInfo.css";

function ContactInfo() {
  return (
    <section className="ci-section">

      <div className="ci-top">

        <div className="ci-details">

          <span className="ci-tag">
            LOCATION
          </span>

          <h2>
            Incredible Holidays
          </h2>

          <p className="ci-description">
            Visit our office, speak with our travel experts,
            or connect with us online. We are always ready
            to help you plan your next unforgettable journey.
          </p>

          <div className="ci-item">

            <h4>Office Address</h4>

            <p>
              Office No. 512,<br />
              Gera Imperium Alpha,<br />
              Kharadi,<br />
              Pune – 411014,<br />
              Maharashtra, India
            </p>

          </div>

          <div className="ci-item">

            <h4>Phone</h4>

            <p>
              +91 7767803692
            </p>

          </div>

          <div className="ci-item">

            <h4>Email</h4>

            <p>
              bookings@incredibleasia.in
            </p>

          </div>

          <a
            href="https://maps.google.com/?q=Incredible+Holidays+Pune"
            target="_blank"
            rel="noreferrer"
            className="ci-map-btn"
          >
            Open In Google Maps
          </a>

        </div>

        <div className="ci-map">

          <iframe
            title="Incredible Holidays"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9216.993824279716!2d73.95128517181637!3d18.556686753783946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1473dcbb55b%3A0x16774edc1044c6ca!2sIncredible%20Holidays!5e0!3m2!1sen!2sin!4v1780915852745!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </div>

    </section>
  );
}

export default ContactInfo;