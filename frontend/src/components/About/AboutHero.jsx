import "./AboutHero.css";
import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <section className="about-hero">

      <div className="about-hero-overlay">

        <h1 className="about-hero-title">
          About Us
        </h1>

        <div className="about-hero-breadcrumb">

          <Link to="/">
            Home
          </Link>

          <span>|</span>

          <Link to="/about">
            About Us
          </Link>

        </div>

      </div>

    </section>
  );
}

export default AboutHero;