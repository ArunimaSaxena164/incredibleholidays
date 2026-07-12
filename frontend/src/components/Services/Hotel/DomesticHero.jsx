// import "./DomesticHero.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

// function DomesticHero() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       image: "/hotel/bg1.png",
//       title: "Hotels Resorts Booking",
//     },
//     {
//       image: "/hotel/bg2.png",
//       title: "Find Your Perfect Stay",
//     },
//   ];

//   const features = [
//     {
//       icon: "/hotel/icon1.png",
//       title: "Wide Selection",
//     },
//     {
//       icon: "/hotel/icon2.png",
//       title: "Real Reviews",
//     },
//     {
//       icon: "/hotel/icon3.png",
//       title: "Instant Booking",
//     },
//     {
//       icon: "/hotel/icon4.png",
//       title: "Best Price",
//     },
//     {
//       icon: "/hotel/icon5.png",
//       title: "24/7 Support",
//     },
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? slides.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section className="domestic-hero">

//       <div className="hero-slider">

//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`hero-slide ${
//               currentSlide === index ? "active" : ""
//             }`}
//             style={{
//               backgroundImage: `url(${slide.image})`,
//             }}
//           />
//         ))}

//         <div className="hero-overlay"></div>

//         <div className="orange-top"></div>
//         <div className="orange-bottom"></div>

//         <button
//           className="hero-arrow left-arrow"
//           onClick={prevSlide}
//         >
//           <FaChevronLeft />
//         </button>

//         <button
//           className="hero-arrow right-arrow"
//           onClick={nextSlide}
//         >
//           <FaChevronRight />
//         </button>

//         <div className="hero-content">

//           <h1>
//             {slides[currentSlide].title}
//           </h1>

//           <Link
//             to="/contact"
//             className="hero-btn"
//           >
//             Book Now
//             <FaArrowRight />
//           </Link>

//         </div>
//       </div>

//       <div className="hero-features">

//         {features.map((item, index) => (
//           <div
//             className="feature-card"
//             key={index}
//           >
//             <img
//               src={item.icon}
//               alt={item.title}
//             />

//             <span>
//               {item.title}
//             </span>
//           </div>
//         ))}

//       </div>

//     </section>
//   );
// }

// export default DomesticHero;
// // .domestic-hero{
// //     margin-top:120px;

// //     position:relative;

// //     padding-bottom:95px;
// // }

// // /* HERO */

// // .hero-slider{
// //     position:relative;

// //     height:500px;

// //     overflow:hidden;

// //     border-top:1px solid transparent;
// // }

// // .hero-slide{
// //     position:absolute;
// //     inset:0;

// //     background-size:cover;
// //     background-position:center;

// //     opacity:0;

// //     transition:
// //     opacity .8s ease-in-out;
// // }

// // .hero-slide.active{
// //     opacity:1;
// // }

// // .hero-overlay{
// //     position:absolute;
// //     inset:0;

// //     background:
// //     rgba(0,0,0,.45);

// //     z-index:2;
// // }

// // /* ORANGE CORNERS */

// // .orange-top{
// //     position:absolute;

// //     top:0;
// //     left:0;

// //     width:330px;
// //     height:170px;

// //     background:#f67d1f;

// //     clip-path:
// //     polygon(
// //       0 0,
// //       100% 0,
// //       0 100%
// //     );

// //     z-index:3;

// //     opacity:.9;
// // }

// // .orange-bottom{
// //     position:absolute;

// //     right:0;
// //     bottom:0;

// //     width:330px;
// //     height:170px;

// //     background:#f67d1f;

// //     clip-path:
// //     polygon(
// //       100% 0,
// //       100% 100%,
// //       0 100%
// //     );

// //     z-index:3;

// //     opacity:.9;
// // }

// // /* CONTENT */

// // .hero-content{
// //     position:absolute;

// //     top:50%;
// //     left:50%;

// //     transform:translate(-50%,-50%);

// //     z-index:4;

// //     display:flex;
// //     flex-direction:column;

// //     align-items:center;
// //     justify-content:center;

// //     text-align:center;

// //     width:100%;

// //     max-width:900px;

// //     margin:0 auto;
// // }

// // .hero-content h1{
// //     font-family:"Cormorant Garamond", serif;

// //     color:#fff;

// //     font-size:72px;

// //     font-weight:500;

// //     line-height:1.05;

// //     margin:0 0 28px;

// //     text-align:center;

// //     white-space:nowrap;
// // }

// // .hero-btn{
// //     display:flex;

// //     align-items:center;
// //     gap:10px;

// //     background:#ff8236;

// //     color:#fff;

// //     text-decoration:none;

// //     padding:15px 35px;

// //     border-radius:50px;

// //     font-size:17px;

// //     font-weight:600;

// //     transition:.3s;
// //     margin:0 auto;
// // }
// // .hero-btn:hover{
// //     background:#fff;
// //     color:#ff8236;
// // }

// // /* ARROWS */

// // .hero-arrow{
// //     position:absolute;

// //     top:50%;

// //     transform:translateY(-50%);

// //     width:48px;
// //     height:48px;

// //     border:none;

// //     border-radius:50%;

// //     background:
// //     rgba(255,255,255,.9);

// //     color:#444;

// //     cursor:pointer;

// //     z-index:5;
// // }

// // .hero-arrow:hover{
// //     background:#ff8236;
// //     color:#fff;
// // }

// // .left-arrow{
// //     left:35px;
// // }

// // .right-arrow{
// //     right:35px;
// // }

// // /* FEATURES */

// // .hero-features{
// //     position:absolute;

// //     left:50%;
// //     bottom:0;

// //     transform:translate(-50%,50%);

// //     width:62%;

// //     background:#151111;

// //     padding:22px;

// //     display:grid;

// //     grid-template-columns:
// //     repeat(5,1fr);

// //     gap:14px;

// //     z-index:10;
// // }
// // .feature-card{
// //     background:#fff;

// //     padding:20px 10px;

// //     text-align:center;

// //     display:flex;
// //     flex-direction:column;

// //     justify-content:center;
// //     align-items:center;
// // }

// // .feature-card:hover img{
// //     transform:scale(1.08);
// // }

// // .feature-card img{
// //     width:50px;

// //     display:block;

// //     margin:0 auto 12px;

// //     transition:.3s;
// // }

// // .feature-card span{
// //     font-family:
// //     "Cormorant Garamond",
// //     serif;

// //     font-size:17px;

// //     line-height:1.3;
// // }
// // .hero-slide{
// //     position:absolute;
// //     inset:0;

// //     background-size:cover;
// //     background-position:center;

// //     opacity:0;

// //     transition:opacity .8s ease-in-out;
// // }

// // .hero-slide.active{
// //     opacity:1;
// // }

// // /* TABLET */

// // @media(max-width:1100px){

// //     .hero-content h1{
// //         font-size:58px;
// //     }

// //     .hero-features{
// //         width:90%;

// //         grid-template-columns:
// //         repeat(3,1fr);
// //     }
// // }

// // /* MOBILE */

// // @media(max-width:768px){

// //     .domestic-hero{
// //         padding-bottom:40px;
// //     }

// //     .hero-slider{
// //         height:430px;
// //     }

// //     .hero-content h1{
// //         font-size:42px;
// //     }

// //     .hero-features{
// //         position:relative;

// //         left:auto;
// //         bottom:auto;

// //         transform:none;

// //         width:100%;

// //         grid-template-columns:
// //         repeat(2,1fr);
// //     }

// //     .hero-arrow{
// //         width:42px;
// //         height:42px;
// //     }

// //     .left-arrow{
// //         left:10px;
// //     }

// //     .right-arrow{
// //         right:10px;
// //     }

// //     .orange-top,
// //     .orange-bottom{
// //         width:140px;
// //         height:140px;
// //     }
// // }
import "./DomesticHero.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";

function DomesticHero() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/hotel/bg1.png",
      title: "Hotels Resorts Booking",
    },
    {
      image: "/hotel/bg2.png",
      title: "Find Your Perfect Stay",
    },
  ];

  const features = [
    {
      icon: "/hotel/icon1.png",
      title: "Wide Selection",
    },
    {
      icon: "/hotel/icon2.png",
      title: "Real Reviews",
    },
    {
      icon: "/hotel/icon3.png",
      title: "Instant Booking",
    },
    {
      icon: "/hotel/icon4.png",
      title: "Best Price",
    },
    {
      icon: "/hotel/icon5.png",
      title: "24/7 Support",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % slides.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        prev === 0
          ? slides.length - 1
          : prev - 1
    );
  };

  return (

    <section className="domestic-hero">

      <div className="domestic-hero-slider">

        {slides.map((slide, index) => (

          <div
            key={index}
            className={`domestic-hero-slide ${
              currentSlide === index ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />

        ))}

        <div className="domestic-hero-overlay"></div>

        <div className="domestic-orange-top"></div>

        <div className="domestic-orange-bottom"></div>

        <button
          className="domestic-hero-arrow domestic-left-arrow"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        <button
          className="domestic-hero-arrow domestic-right-arrow"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>

        <div className="domestic-hero-content">

          <h1>
            {slides[currentSlide].title}
          </h1>

          <Link
            to="/contact"
            className="domestic-hero-btn"
          >
            Book Now

            <FaArrowRight />

          </Link>

        </div>

      </div>

      <div className="domestic-hero-features">

        {features.map((item, index) => (

          <div
            className="domestic-feature-card"
            key={index}
          >

            <img
              src={item.icon}
              alt={item.title}
            />

            <span>
              {item.title}
            </span>

          </div>

        ))}

      </div>

    </section>

  );
}

export default DomesticHero;