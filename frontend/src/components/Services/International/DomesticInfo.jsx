// import "./DomesticInfo.css";
// import { Link } from "react-router-dom";
// import { FaCheck, FaArrowRight } from "react-icons/fa";

// function DomesticInfo() {
//   const points = [
//     "Curated international getaways with premium stays and seamless planning.",
//     "Tailor-made itineraries crafted by global travel specialists.",
//     "Expert VISA assistance to ensure smooth and successful approvals.",
//     "Dedicated support from planning to your safe return.",
//   ];

//   return (
//     <section className="domestic-info">

//       <div className="domestic-info-container">

//         {/* LEFT */}

//         <div className="info-left">

//           <div className="image-layout">

//             <img
//               src="/international/int1.png"
//               alt="Kerala Houseboat"
//               className="large-image"
//             />

//             <div className="small-images">

//               <img
//                 src="/international/int2.png"
//                 alt="Munnar"
//               />

//               <img
//                 src="/international/int3.png"
//                 alt="Gulmarg"
//               />

//             </div>

//           </div>

//           <div className="why-section">

//             <h3>
//              Why explore the world with Incredible Holidays?
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
//             Explore the World with Incredible Holidays
//           </span>

//           <h2>
//             Where Luxury Meets Seamless Travel
//           </h2>

//           <p>
//            The world is full of wonders; and with Incredible Holidays, you don’t just visit them, you experience them.
//           </p>

//           <p>
//             Our customized international tours are designed for discerning travelers who value thoughtful planning, exclusive experiences, and complete peace of mind. Whether it’s a romantic escape to Santorini, a family vacation in the Swiss Alps, or a once-in-a-lifetime road trip through New Zealand, we tailor every journey to your dreams.
//           </p>

//           <p>
//            Just booking a five-star hotel and a luxury car doesn’t make a trip truly memorable. That’s where our expertise comes in; by creating moments with curated and exclusive touches.
//           </p>

//           <p>
//             Like a private champagne breakfast on a Paris rooftop, or a surprise gondola proposal in Venice timed with sunset.
//           </p>

//           <p>
//            These aren’t just plans; they’re stories you’ll tell for years.
//           </p>
//           <p>From visa assistance to personalized sightseeing, luxury stays, internal transfers, and even restaurant reservations; everything is taken care of by your dedicated travel expert.</p>

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
    "Curated international getaways with premium stays and seamless planning.",
    "Tailor-made itineraries crafted by global travel specialists.",
    "Expert VISA assistance to ensure smooth and successful approvals.",
    "Dedicated support from planning to your safe return.",
  ];

  return (

    <section className="domestic-info">

      <div className="domestic-info-container">

        {/* LEFT */}

        <div className="domestic-info-left">

          <div className="domestic-image-layout">

            <img
              src="/international/int1.png"
              alt="International Tour"
              className="domestic-large-image"
            />

            <div className="domestic-small-images">

              <img
                src="/international/int2.png"
                alt="International Destination"
              />

              <img
                src="/international/int3.png"
                alt="International Destination"
              />

            </div>

          </div>

          <div className="domestic-why-section">

            <h3>
              Why explore the world with Incredible Holidays?
            </h3>

            <ul>

              {points.map((point, index) => (

                <li key={index}>

                  <FaCheck />

                  <span>{point}</span>

                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* RIGHT */}

        <div className="domestic-info-right">

          <span className="domestic-section-tag">
            Explore the World with Incredible Holidays
          </span>

          <h2>
            Where Luxury Meets Seamless Travel
          </h2>

          <p>
            The world is full of wonders; and with Incredible Holidays,
            you don't just visit them, you experience them.
          </p>

          <p>
            Our customized international tours are designed for
            discerning travelers who value thoughtful planning,
            exclusive experiences, and complete peace of mind.
            Whether it's a romantic escape to Santorini,
            a family vacation in the Swiss Alps,
            or a once-in-a-lifetime road trip through New Zealand,
            we tailor every journey to your dreams.
          </p>

          <p>
            Just booking a five-star hotel and a luxury car doesn't
            make a trip truly memorable. That's where our expertise
            comes in by creating moments with curated and exclusive
            touches.
          </p>

          <p>
            Like a private champagne breakfast on a Paris rooftop,
            or a surprise gondola proposal in Venice timed with sunset.
          </p>

          <p>
            These aren't just plans; they're stories you'll tell
            for years.
          </p>

          <p>
            From visa assistance to personalized sightseeing,
            luxury stays, internal transfers,
            and even restaurant reservations,
            everything is taken care of by your dedicated travel expert.
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