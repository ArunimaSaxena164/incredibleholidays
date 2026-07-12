import "./WhyChooseUs.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaUserTie,
  FaPlaneDeparture,
  FaCamera,
  FaCalendarAlt,
} from "react-icons/fa";

function WhyChooseUs() {
    const { ref, inView } = useInView({
  triggerOnce: true,
  threshold: 0.3,
});
  const features = [
    {
      icon: <FaUserTie />,
      title: "Personalized Planning",
      description: "Travel plans personalized for you.",
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Luxury Redefined",
      description:
        "Experience travel with unmatched comfort and exceptional elegance.",
    },
    {
      icon: <FaCamera />,
      title: "Unique Memories",
      description:
        "Creating unforgettable moments that last a lifetime.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Seamless Planning",
      description:
        "Effortless travel planning for stress-free adventures.",
    },
  ];

  return (
    <section className="why-section">

      <div className="why-header">

        <span className="why-tag">
          WHY CHOOSE US
        </span>

        <h2 className="why-title">
          Why You Should Travel With Incredible Holidays
        </h2>

        <p className="why-subtitle">
          At Incredible Holidays, we take pride in crafting
          bespoke travel experiences that cater to your unique
          tastes and preferences. We don’t just sell tours or
          packages; we meticulously plan every detail to ensure
          that your vacation is nothing short of extraordinary.
        </p>

      </div>

      <div className="why-content">

        <div className="why-left">

          {features.map((item, index) => (

            <div
              className="why-item"
              key={index}
            >

              <div className="why-text">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

              <div className="why-icon">
                {item.icon}
              </div>

            </div>

          ))}

        </div>

        <div className="why-right">

          <img
            src="/whychoose/why-choose.webp"
            alt="Why Choose Us"
          />

          <div className="experience-box" ref={ref}>

            <h4>
              18+ Years Of Experience
              <br />
              In Travel Industry
            </h4>

            <div className="experience-row">
              <span>Happy Travelers</span>
             <span>
  {inView && (
    <CountUp
      end={25000}
      duration={3}
      separator=","
    />
  )}
  +
</span>
            </div>

            <div className="experience-line">
  <div
    className={`progress-fill ${
      inView ? "progress-fill-active" : ""
    }`}
    style={{ width: "82%" }}
  />
</div>

            <div className="experience-row">
              <span>Performance</span>
              <span>
  {inView && (
    <CountUp
      end={98}
      duration={3}
    />
  )}
  %
</span>
            </div>

           <div className="experience-line">
  <div
    className={`progress-fill ${
      inView ? "progress-fill-active" : ""
    }`}
    style={{ width: "92%" }}
  />
</div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;