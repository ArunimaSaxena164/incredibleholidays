import "./Testimonials.css";
import { useState, useEffect } from "react";

function Testimonials() {

const sliderVideos = [
{
title: "Testimonials",
video: "/testimonials/left/testimonial1.mp4"
},
{
title: "Testimonials",
video: "/testimonials/left/testimonial2.mp4"
},
{
title: "Testimonials",
video: "/testimonials/left/testimonial3.mp4"
}
];

const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {


const interval = setInterval(() => {

  setCurrentSlide((prev) =>
    prev === sliderVideos.length - 1
      ? 0
      : prev + 1
  );

}, 5000);

return () => clearInterval(interval);


}, []);

return (


<section className="testimonial-section">

  <div className="testimonial-header">

    <span className="testimonial-tag">
      AUTHENTIC JOURNEYS
    </span>

    <h2 className="testimonial-title">
      Real Stories, Real Experiences
    </h2>

  </div>

  <div className="testimonial-grid">

    {/* LEFT SLIDER */}

    <div className="left-slider">

      <div className="testimonial-card slider-card">

        <video
          key={currentSlide}
          controls
          muted
        >
          <source
            src={sliderVideos[currentSlide].video}
            type="video/mp4"
          />
        </video>

        <div className="location-bar">
          {sliderVideos[currentSlide].title}
        </div>

      </div>

      <div className="slider-dots">

        {sliderVideos.map((_, index) => (

          <button
            key={index}
            className={
              currentSlide === index
                ? "dot active-dot"
                : "dot"
            }
            onClick={() =>
              setCurrentSlide(index)
            }
          />

        ))}

      </div>

    </div>

    {/* CENTER */}

    <div className="center-column">

      <div className="testimonial-card">

        <video controls>
          <source
            src="/testimonials/center/dubai.mp4"
            type="video/mp4"
          />
        </video>

        <div className="location-bar">
          Dubai
        </div>

      </div>

      <div className="testimonial-card">

        <video controls>
          <source
            src="/testimonials/center/galle.mp4"
            type="video/mp4"
          />
        </video>

        <div className="location-bar">
          Galle
        </div>

      </div>

    </div>

    {/* RIGHT */}

    <div className="right-column">

      <div className="testimonial-card">

        <video controls>
          <source
            src="/testimonials/right/Thailand.mp4"
            type="video/mp4"
          />
        </video>

        <div className="location-bar">
          Thailand
        </div>

      </div>

    </div>

  </div>

</section>


);
}

export default Testimonials;
