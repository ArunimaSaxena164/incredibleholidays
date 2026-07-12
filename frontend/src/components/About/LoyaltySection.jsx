import "./LoyaltySection.css";

function LoyaltySection() {
  return (
    <section className="loyalty-section">

      <div className="loyalty-container">

        <div className="loyalty-content">

          <span className="loyalty-tag" style={{fontSize:"15px"}}>
            CLIENT
          </span>

          <h2 className="loyalty-title">
            Client Loyalty & The Road Ahead
          </h2>

          <p className="loyalty-text">
            Our proudest achievement? Over 85% of our clients
            return for their next vacation and bring friends
            along. Today, Incredible Holidays is a trusted
            name for customized luxury travel.

            As we look ahead, we are excited to blend
            innovation with our signature personal touch;
            to make every journey even more seamless,
            soulful, and unforgettable.
          </p>

        </div>

        <div className="loyalty-image-wrapper">

          <img
            src="/pageAbout/client.png"
            alt="Client Loyalty"
            className="loyalty-image"
          />

        </div>

      </div>

    </section>
  );
}

export default LoyaltySection;