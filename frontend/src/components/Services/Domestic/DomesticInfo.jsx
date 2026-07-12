// import "./DomesticInfo.css";
// import { Link } from "react-router-dom";
// import { FaCheck, FaArrowRight } from "react-icons/fa";

// function DomesticInfo() {
//   const points = [
//     "Handpicked luxury resorts and boutique stays",
//     "Personalized itineraries crafted by seasoned travel experts",
//     "Authentic cultural experiences with a premium feel",
//     "Dedicated travel consultant from start to finish",
//   ];

//   return (
//     <section className="domestic-info">

//       <div className="domestic-info-container">

//         {/* LEFT */}

//         <div className="info-left">

//           <div className="image-layout">

//             <img
//               src="/domestic/domestic1.png"
//               alt="Kerala Houseboat"
//               className="large-image"
//             />

//             <div className="small-images">

//               <img
//                 src="/domestic/domestic2.png"
//                 alt="Munnar"
//               />

//               <img
//                 src="/domestic/domestic3.png"
//                 alt="Gulmarg"
//               />

//             </div>

//           </div>

//           <div className="why-section">

//             <h3>
//               Why travel India with Incredible Holidays?
//             </h3>

//             <ul>

//               {points.map((point, index) => (
//                 <li key={index}>
//                   <FaCheck />
//                   <span>{point}</span>
//                 </li>
//               ))}

//             </ul>

//           </div>

//         </div>

//         {/* RIGHT */}

//         <div className="info-right">

//           <span className="section-tag">
//             DOMESTIC TOURS
//           </span>

//           <h2>
//             Curated India Journeys,
//             Crafted Just for You
//           </h2>

//           <p>
//             From the serene backwaters of Kerala to the royal palaces
//             of Rajasthan, from Himalayan retreats to luxury beach
//             escapes in Goa; Incredible Holidays brings you
//             handpicked, customized India tours with a premium touch.
//           </p>

//           <p>
//             Our <strong>Premium Domestic Tours</strong> are designed
//             for discerning travelers who want to explore India’s rich
//             diversity without compromising on comfort, style, or
//             personal attention.
//           </p>

//           <p>
//             Every itinerary is thoughtfully crafted, combining iconic
//             destinations, hidden gems, exclusive stays, and unique
//             experiences; all tailored to your interests and pace.
//           </p>

//           <p>
//             Whether it's a romantic getaway, a family holiday, a
//             spiritual retreat, or a wellness escape, we ensure
//             seamless planning, curated accommodations, and local
//             insights that elevate your journey.
//           </p>

//           <p>
//             Discover India in a way that’s personal, elegant, and
//             unforgettable; with Incredible Holidays.
//           </p>

//           <Link
//             to="/contact"
//             className="know-more-btn"
//           >
//             Know More
//             <FaArrowRight />
//           </Link>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default DomesticInfo;
// // .domestic-info{
// //     margin-top: 80px;
// //     padding:120px 0 90px;
// // }

// // .domestic-info-container{
// //     max-width:1180px;

// //     margin:0 auto;

// //     padding:0 40px;

// //     display:grid;

// //     grid-template-columns:
// //     1fr 1fr;

// //     gap:50px;

// //     align-items:start;
// // }

// // /* LEFT SIDE */

// // .image-layout{
// //     display:flex;

// //     gap:18px;

// //     margin-bottom:20px;
// // }

// // .large-image{
// //     width:70%;

// //     height:350px;

// //     object-fit:cover;
// // }

// // .small-images{
// //     width:30%;

// //     display:flex;

// //     flex-direction:column;

// //     gap:18px;
// // }

// // .small-images img{
// //     width:100%;

// //     height:161px;

// //     object-fit:cover;
// // }
// // .why-section
// // {
// //     margin-top: 0;
// // }
// // .why-section h3{
// //     font-family:
// //     "Cormorant Garamond",
// //     serif;

// //     font-size:22px;

// //     font-weight:500;

// //     color:#111;

// //     margin-bottom:28px;
// // }

// // .why-section ul{
// //     list-style:none;

// //     padding:0;
// // }

// // .why-section li{
// //     display:flex;

// //     align-items:flex-start;

// //     gap:14px;

// //     margin-bottom:18px;

// //     color:#222;

// //     font-size:15px;

// //     line-height:1.7;
// // }

// // .why-section li svg{
// //     color:#ff8236;

// //     margin-top:5px;

// //     flex-shrink:0;

// //     font-size:18px;
// // }

// // /* RIGHT SIDE */

// // .section-tag{
// //     display:block;

// //     color:#ff8236;

// //     font-size:15px;

// //     font-weight:700;

// //     letter-spacing:4px;

// //     margin-bottom:18px;
// // }

// // .info-right h2{
// //     font-family:
// //     "Cormorant Garamond",
// //     serif;

// //     font-size:38px;

// //     line-height:1.05;

// //     font-weight:500;

// //     color:#111;

// //     margin-bottom:28px;

// //     max-width:700px;
// // }

// // .info-right p{
// //     color:#707070;

// //     font-size:15px;

// //     line-height:1.75;

// //     margin-bottom:18px;
// // }

// // .know-more-btn{
// //     display:inline-flex;

// //     align-items:center;

// //     gap:12px;

// //     margin-top:12px;

// //     text-decoration:none;

// //     background:#ff8236;

// //     color:#fff;

// //     padding:18px 40px;

// //     border-radius:50px;

// //     font-size:17px;

// //     font-weight:600;

// //     transition:.3s;
// // }

// // .know-more-btn:hover{
// //     background:#fff;

// //     color:#ff8236;

// //     border:1px solid #ff8236;
// // }

// // /* TABLET */

// // @media(max-width:1100px){

// //     .domestic-info-container{
// //         grid-template-columns:1fr;
// //     }

// //     .info-right h2{
// //         font-size:50px;
// //     }
// // }

// // /* MOBILE */

// // @media(max-width:768px){

// //     .domestic-info{
// //         padding:80px 0 60px;
// //     }

// //     .domestic-info-container{
// //         padding:0 20px;
// //     }

// //     .image-layout{
// //         flex-direction:column;
// //     }

// //     .large-image,
// //     .small-images{
// //         width:100%;
// //     }

// //     .large-image{
// //         height:350px;
// //     }

// //     .small-images{
// //         flex-direction:row;
// //     }

// //     .small-images img{
// //         height:180px;
// //     }

// //     .info-right h2{
// //         font-size:38px;
// //     }

// //     .info-right p{
// //         font-size:16px;
// //     }

// //     .why-section h3{
// //         font-size:24px;
// //     }

// //     .know-more-btn{
// //         width:100%;

// //         justify-content:center;
// //     }
// // }
import "./DomesticInfo.css";
import { Link } from "react-router-dom";
import { FaCheck, FaArrowRight } from "react-icons/fa";

function DomesticInfo() {

  const points = [
    "Handpicked luxury resorts and boutique stays",
    "Personalized itineraries crafted by seasoned travel experts",
    "Authentic cultural experiences with a premium feel",
    "Dedicated travel consultant from start to finish",
  ];

  return (

    <section className="domestic-info">

      <div className="domestic-info-container">

        {/* LEFT */}

        <div className="domestic-info-left">

          <div className="domestic-image-layout">

            <img
              src="/domestic/domestic1.png"
              alt="Kerala Houseboat"
              className="domestic-large-image"
            />

            <div className="domestic-small-images">

              <img
                src="/domestic/domestic2.png"
                alt="Munnar"
              />

              <img
                src="/domestic/domestic3.png"
                alt="Gulmarg"
              />

            </div>

          </div>

          <div className="domestic-why-section">

            <h3>
              Why travel India with Incredible Holidays?
            </h3>

            <ul>

              {points.map((point, index) => (

                <li key={index}>

                  <FaCheck />

                  <span>
                    {point}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* RIGHT */}

        <div className="domestic-info-right">

          <span className="domestic-section-tag">
            DOMESTIC TOURS
          </span>

          <h2>
            Curated India Journeys,
            Crafted Just for You
          </h2>
                    <p>
            From the serene backwaters of Kerala to the royal palaces
            of Rajasthan, from Himalayan retreats to luxury beach
            escapes in Goa; Incredible Holidays brings you
            handpicked, customized India tours with a premium touch.
          </p>

          <p>
            Our <strong>Premium Domestic Tours</strong> are designed
            for discerning travelers who want to explore India’s rich
            diversity without compromising on comfort, style, or
            personal attention.
          </p>

          <p>
            Every itinerary is thoughtfully crafted, combining iconic
            destinations, hidden gems, exclusive stays, and unique
            experiences; all tailored to your interests and pace.
          </p>

          <p>
            Whether it's a romantic getaway, a family holiday, a
            spiritual retreat, or a wellness escape, we ensure
            seamless planning, curated accommodations, and local
            insights that elevate your journey.
          </p>

          <p>
            Discover India in a way that’s personal, elegant, and
            unforgettable; with Incredible Holidays.
          </p>

          <Link
            to="/contact"
            className="domestic-know-more-btn"
          >
            Know More

            <FaArrowRight />

          </Link>

        </div>

      </div>

    </section>

  );
}

export default DomesticInfo;