// import "./IconicSpots.css";
// import { useState } from "react";
// import {
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";

// function IconicSpots() {

//   const images = [
//     "/international/slide1.png",
//     "/international/slide2.png",
//     "/international/slide3.png",
//     "/international/slide4.png",
//     "/international/slide5.png",
//     "/international/slide6.png",
//     "/international/slide7.png",
//     "/international/slide8.png",
//     "/international/slide9.png",
//     "/international/slide10.png"
//   ];

//   const [current, setCurrent] = useState(0);

//   const maxIndex = images.length - 3;

//   const nextSlide = () => {
//     if (current < maxIndex) {
//       setCurrent(current + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (current > 0) {
//       setCurrent(current - 1);
//     }
//   };

//   return (
//     <section className="iconic-section">

//       <h2>
//         Explore Iconic Places In The World
//       </h2>

//       <div className="iconic-slider">

//         <button
//           className={`iconic-arrow left ${
//             current === 0 ? "disabled" : ""
//           }`}
//           onClick={prevSlide}
//           disabled={current === 0}
//         >
//           <FaChevronLeft />
//         </button>

//         <div className="iconic-window">

//           <div
//             className="iconic-track"
//             style={{
//               transform: `translateX(calc(-${current * (100 / 3)}% - ${current * 18}px))`
//             }}
//           >

//             {images.map((image, index) => (
//               <div
//                 className="iconic-card"
//                 key={index}
//               >
//                 <img
//                   src={image}
//                   alt={`spot-${index}`}
//                 />
//               </div>
//             ))}

//           </div>

//         </div>

//         <button
//           className={`iconic-arrow right ${
//             current === maxIndex ? "disabled" : ""
//           }`}
//           onClick={nextSlide}
//           disabled={current === maxIndex}
//         >
//           <FaChevronRight />
//         </button>

//       </div>

//     </section>
//   );
// }

// export default IconicSpots;
// // .iconic-section{
// //     max-width:1280px;
// //     margin:90px auto;
// //     padding:0 40px;
// // }

// // .iconic-section h2{
// //     text-align:center;

// //     font-family:"Cormorant Garamond",serif;

// //     font-size:52px;
// //     font-weight:500;

// //     color:#111;

// //     margin-bottom:45px;
// // }

// // /* SLIDER */

// // .iconic-slider{
// //     position:relative;
// // }

// // .iconic-window{
// //     overflow:hidden;
// // }

// // /* TRACK */

// // .iconic-track{
// //     display:flex;
// //     gap:18px;

// //     transition:
// //     transform .7s ease;
// // }

// // /* CARD */

// // .iconic-card{
// //     flex:0 0 calc((100% - 36px)/3);

// //     overflow:hidden;
// // }

// // .iconic-card img{
// //     width:100%;
// //     height:240px;

// //     object-fit:cover;

// //     display:block;

// //     transition:
// //     transform .4s ease;
// // }

// // .iconic-card:hover img{
// //     transform:scale(1.06);
// // }

// // /* ARROWS */

// // .iconic-arrow{
// //     position:absolute;

// //     top:50%;

// //     transform:translateY(-50%);

// //     width:44px;
// //     height:44px;

// //     border:none;

// //     border-radius:50%;

// //     background:#ff8236;

// //     color:#fff;

// //     cursor:pointer;

// //     z-index:20;

// //     display:flex;
// //     justify-content:center;
// //     align-items:center;

// //     transition:.3s;
// // }

// // .iconic-arrow:hover:not(.disabled){
// //     background:#e56f25;
// // }

// // .iconic-arrow.left{
// //     left:-22px;
// // }

// // .iconic-arrow.right{
// //     right:-22px;
// // }

// // /* DISABLED */

// // .iconic-arrow.disabled{
// //     background:#d9d9d9;

// //     color:#999;

// //     cursor:not-allowed;

// //     opacity:.75;
// // }

// // /* TABLET */

// // @media(max-width:992px){

// //     .iconic-section{
// //         padding:0 25px;
// //     }

// //     .iconic-section h2{
// //         font-size:42px;
// //     }

// //     .iconic-card img{
// //         height:210px;
// //     }
// // }

// // /* MOBILE */

// // @media(max-width:768px){

// //     .iconic-section{
// //         padding:0 15px;
// //         margin:70px auto;
// //     }

// //     .iconic-section h2{
// //         font-size:32px;
// //         margin-bottom:25px;
// //     }

// //     .iconic-card img{
// //         height:150px;
// //     }

// //     .iconic-arrow{
// //         width:36px;
// //         height:36px;
// //     }

// //     .iconic-arrow.left{
// //         left:-5px;
// //     }

// //     .iconic-arrow.right{
// //         right:-5px;
// //     }
// // }
import "./IconicSpots.css";
import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function IconicSpots() {

  const images = [
    "/international/slide1.png",
    "/international/slide2.png",
    "/international/slide3.png",
    "/international/slide4.png",
    "/international/slide5.png",
    "/international/slide6.png",
    "/international/slide7.png",
    "/international/slide8.png",
    "/international/slide9.png",
    "/international/slide10.png",
  ];

  const [current, setCurrent] = useState(0);

  const maxIndex = images.length - 3;

  const nextSlide = () => {
    if (current < maxIndex) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (

    <section className="domestic-iconic-section">

      <h2>
        Explore Iconic Places In The World
      </h2>

      <div className="domestic-iconic-slider">

        <button
          className={`domestic-iconic-arrow left ${
            current === 0 ? "disabled" : ""
          }`}
          onClick={prevSlide}
          disabled={current === 0}
        >
          <FaChevronLeft />
        </button>

        <div className="domestic-iconic-window">

          <div
            className="domestic-iconic-track"
            style={{
              transform: `translateX(calc(-${current * (100 / 3)}% - ${current * 18}px))`,
            }}
          >

            {images.map((image, index) => (

              <div
                className="domestic-iconic-card"
                key={index}
              >

                <img
                  src={image}
                  alt={`spot-${index}`}
                />

              </div>

            ))}

          </div>

        </div>

        <button
          className={`domestic-iconic-arrow right ${
            current === maxIndex ? "disabled" : ""
          }`}
          onClick={nextSlide}
          disabled={current === maxIndex}
        >
          <FaChevronRight />
        </button>

      </div>

    </section>

  );
}

export default IconicSpots;