
import "./TestimonialsSlider.css";

import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const reviews = [
   {
    image:"/reviews/review1.webp",
    name:"Rohit Bansal",
    text:"Thank you Incredible Holidays team, special Thanks to Leya who helped us in customozing our Thailand trip and taking care of all our requirements, it was wonderful experience and my family really enjoyed. everything was very well organised once we reach there and till drop to airport!"
  },
  {
    image:"/reviews/review2.webp",
    name:"Neha Agarwal",
    text:"Thank you Leya and Incredible Holidays for planning our Singapore trip. Inspite of small initial hiccup ( which was handled quite responsibly) everything went smooth... All the transportation were bang on time. We had an amazing experience!! Team is quite responsive...."
  },
  {
    image:"/reviews/review3.webp",
    name:"Aman Soni",
    text:"Went on a trip to Kashmir with friends and family and it was an amazing experience! Thank you Incredible Holidays for planning our trip. Kashmir is very safe and a must visit for all."
  },
  {
    image:"/reviews/review4.webp",
    name:"Supriya Ghule",
    text:"We travelled to Vietnam in a group of 8 through incredible holidays.It was our first trip with Incredible holidays and was wonderful experience.Wvweything went well as per the itinerary and the hotels selected were very good.Thanks to the team."
  },
  {
    image:"/reviews/review5.jpg",
    name:"Dipesh Jain",
    text:"Hello!!! Just back from dubai trip planned by INCREDIBLE HOLIDAYS. It was our first trip with incredible holidays but it feel like that we were travelling with family because there management, itinerary n response was superrr n special thanks to Bhagyashree mam because very quick reply n better advisor about are trip itinerary n all things n specially listening to all my query's before and during the trip like a mother mtlb kuch be bolo hojayega dipesh ji"
  },
  {
    image:"/reviews/review6.jpg",
    name:"Hitesh Batra",
    text:"Amazing trip to Phuket..thanks to Incredible Holidays team to arranging wonderful places for our visit..James bond Island was the best..Fantasea show was awesome and loved it..must visit the Phuket..and choose Incredible Holidays team for managing your tour...Thank you team for arranging everything for us it was wonderful and loving experience.... definitely look forward for next trip arranged by you.."
  },
  {
    image:"/reviews/review7.jpg",
    name:"Balukeshwar Nath",
    text:"We have taken Incredible Holidays services many times. I found they are the most genuine holiday company in Pune. Always take care of small things. We went to Dubai for our business trip and it was so much organized starting from pickup from our house. We are so happy that we found this company. I must recommend for their services to others.."
  },
  {
    image:"/reviews/review8.jpg",
    name:"R Kannan",
    text:"Thank you for organizing such a wonderful trip for us to Shimla, Manali and Dharamshala. We thoroughly enjoyed it, the hotels were of top quality, all other arrangements were excellent. Except for a minor verbal altercation with the car driver, the whole trip went off smoothly. Hope to plan more travels with you in the future and also recommend to other friends."
  },
  {
    image:"/reviews/review9.jpg",
    name:"Sulabh Srivastava",
    text:"We just did a Thailand tour package through Incredible holidays. It was a wonderful experience and Incredible holidays team, managed the tour professionally and utilized our 4 days very effectively and covered several attractions like Coral Island trip with speed boat, Sanctuary of Truth, World class Nong Nooch Garden, Alcazar show in Pattaya city and then Golden Buddha and Marble Buddha temples, Safari World in Bangkok."
  }
];

function TestimonialsSlider() {

  const [currentReview,setCurrentReview] =
  useState(0);

  const nextReview = () => {

    setCurrentReview(
      (prev)=>
      (prev+1)%reviews.length
    );

  };

  const prevReview = () => {

    setCurrentReview(
      (prev)=>
      (prev-1+reviews.length)%reviews.length
    );

  };

  const visibleReviews=[
    reviews[currentReview],
    reviews[(currentReview+1)%reviews.length],
    reviews[(currentReview+2)%reviews.length]
  ];

  return (

    <section className="ts-section">

      <div className="ts-header">

        <span className="ts-tag">
          TESTIMONIALS
        </span>

        <h2 className="ts-title">
          What Our Client Say About Us
        </h2>

        <p className="ts-description">
          At Incredible Holidays, we take pride
          in crafting bespoke travel experiences
          that cater to your unique tastes and
          preferences.
        </p>

      </div>

      <div className="ts-slider-wrap">

        <button
          className="ts-nav-btn"
          onClick={prevReview}
        >
          <FaChevronLeft />
        </button>

        <div className="ts-cards-container">

          {visibleReviews.map((item,index)=>(

            <div
              className="ts-card"
              key={index}
            >

              <div className="ts-quote">
                ❞
              </div>

              <p className="ts-review-text">
                {item.text}
              </p>

              <div className="ts-stars">
                ★★★★★
              </div>

              <img
                src={item.image}
                alt={item.name}
                className="ts-avatar"
              />

              <h4 className="ts-name">
                {item.name}
              </h4>

            </div>

          ))}

        </div>

        <button
          className="ts-nav-btn"
          onClick={nextReview}
        >
          <FaChevronRight />
        </button>

      </div>

    </section>
  );
}

export default TestimonialsSlider;