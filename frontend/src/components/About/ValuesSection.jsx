import "./ValuesSection.css";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function ValuesSection() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const values = [
    {
      icon: "/pageAbout/icon3.png",
      title: "Integrity & Transparency",
      text: "We're honest in our advice, clear in our communication, and upfront about costs. No hidden agendas, no fine print; just trusted travel guidance.",
    },
    {
      icon: "/pageAbout/icon4.png",
      title: "Excellence in Execution",
      text: "Every detail matters. From your airport transfer to a surprise candlelight dinner, we plan with precision to ensure every moment goes smoothly.",
    },
    {
      icon: "/pageAbout/icon5.png",
      title: "Relationships Before Revenue",
      text: "Our clients aren't numbers; they're part of our journey. We build lifelong bonds, not one-time bookings, and our 85% repeat client rate says it all.",
    },
    {
      icon: "/pageAbout/icon6.png",
      title: "Passion for Travel",
      text: "We love what we do — and it shows. Our team lives and breathes travel, always exploring new destinations, hotels, and ideas to bring fresh inspiration to your holidays.",
    },
    {
      icon: "/pageAbout/icon1.png",
      title: "Personalization Over Mass Production",
      text: "We believe every traveler is unique. That's why we listen first, then create tailor-made itineraries that reflect your style, preferences, and pace.",
    },
    {
      icon: "/pageAbout/icon2.png",
      title: "Experiences Over Transactions",
      text: "Travel is not just about hotels and flights; it's about the feelings you carry home. We focus on curating experiences that inspire, connect, and enrich.",
    },
  ];

  return (
    <section className="values-section" ref={ref}>

      <div className="values-header">

        <span className="values-tag" style={{fontSize:"15px"}}>
          VALUES
        </span>

        <h2 className="values-title">
          Our Core Values
        </h2>

        <p className="values-description">
          At Incredible Holidays, our values are the foundation of
          everything we do; from the first travel consultation to
          the final goodbye wave after your journey.
        </p>

      </div>

      <div className="values-grid">

        {values.map((item, index) => (

          <div
            className="value-card"
            key={index}
          >

            <img
              src={item.icon}
              alt={item.title}
            />

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

      <div className="values-stats">

        <div className="stat-box">

          <div className="stat-number">
            {inView && (
              <CountUp
                end={18}
                duration={3}
              />
            )}
            +
          </div>

          <div className="stat-label">
            Years Experience
          </div>

        </div>

        <div className="stat-box">

          <div className="stat-number">
            {inView && (
              <CountUp
                end={25000}
                separator=","
                duration={3}
              />
            )}
            +
          </div>

          <div className="stat-label">
            Delighted Clients
          </div>

        </div>

        <div className="stat-box">

          <div className="stat-number">
            {inView && (
              <CountUp
                end={500}
                duration={3}
              />
            )}
            +
          </div>

          <div className="stat-label">
            Corporate Events
          </div>

        </div>

        <div className="stat-box">

          <div className="stat-number">
            {inView && (
              <CountUp
                end={100}
                duration={3}
              />
            )}
            +
          </div>

          <div className="stat-label">
            Family Groups
          </div>

        </div>

      </div>

    </section>
  );
}

export default ValuesSection;