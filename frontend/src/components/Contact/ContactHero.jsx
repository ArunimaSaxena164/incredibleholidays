import "./ContactHero.css";

function ContactHero() {
  return (
    <section className="contact-hero">

      <div className="contact-hero-overlay">

        <h1 className="contact-hero-title">
          Contact Us
        </h1>

        <div className="contact-breadcrumb">

          <span><a href="/">Home</a></span>

          <span>|</span>

          <span><a href="/contact">Contact Us</a></span>

        </div>

      </div>

    </section>
  );
}

export default ContactHero;