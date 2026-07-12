import "./HeroSection.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    bg: "/hero/slide1-bg.png",
    main: "/hero/slide1-main.png",
    circle: "/hero/slide1-circle.jpg",
    script: "discover",
    title1: "BEAUTIFUL",
    title2: "INDIA",
    heading: "Domestic Tour",
    description:
      "Discover amazing destinations and hidden gems with our customized travel packages.",
  },
  {
    bg: "/hero/slide2-bg.png",
    main: "/hero/slide2-main.png",
    circle: "/hero/slide2-circle.png",
    script: "journey",
    title1: "ACROSS THE",
    title2: "GLOBE",
    heading: "International Tour",
    description:
      "Explore breathtaking global destinations with our hassle-free travel and tour services.",
  },
  {
    bg: "/hero/slide3-bg.png",
    main: "/hero/slide3-main.png",
    circle: "/hero/slide3-circle.webp",
    script: "feel luxury",
    title1: "HOTEL",
    title2: "BOOKING",
    heading: "What to expect from us ?",
    description:
      "Book with us for the lowest guaranteed rates on domestic and international Luxury stays! Lower than online rates!",
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.0), rgba(255,255,255,.0)), url(${slide.bg})`,
      }}
    >
      <AnimatePresence mode="wait">

<motion.div
    key={current}
    className="hero-content"
    initial={{ x: 120, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -120, opacity: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeInOut",
    }}
>
        <h3 className="hero-script">{slide.script}</h3>

        <h1 className="hero-title-black">{slide.title1}</h1>

        <h1 className="hero-title-orange">{slide.title2}</h1>

        <h2 className="hero-heading">{slide.heading}</h2>

        <p className="hero-description">{slide.description}</p>

        <div className="hero-buttons">
          <a
            href="https://wa.link/yhaimx"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp />
          </a>

          <a href="/contact" className="trip-btn">
            BOOK A TRIP TODAY!
          </a>
        </div>
      </motion.div>

     <motion.div
    key={`image-${current}`}
    className="hero-right"
    initial={{ x: 150, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -150, opacity: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeInOut",
    }}
>
        <div className="hero-circle">
          <img src={slide.circle} alt="" />
        </div>

        <img
          src={slide.main}
          alt=""
          className="hero-main-image"
        />
      </motion.div>

</AnimatePresence>
      <div className="hero-arrows">
        <button onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <button onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default HeroSection;