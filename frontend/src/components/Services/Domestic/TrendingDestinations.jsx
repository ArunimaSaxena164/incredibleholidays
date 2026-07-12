// import "./TrendingDestinations.css";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// function TrendingDestinations() {
//   const destinations = [
//     {
//       image: "/domestic/loc1.png",
//       title: "Rajasthan",
//       description:
//         "Experience regal heritage, majestic palaces, vibrant culture, and thrilling desert safaris in the Land of Kings.",
//     },
//     {
//       image: "/domestic/loc2.png",
//       title: "Kerala",
//       description:
//         "Unwind in lush backwaters, indulge in Ayurveda, and explore serene landscapes and rich local traditions.",
//     },
//     {
//       image: "/domestic/loc3.png",
//       title: "Goa",
//       description:
//         "Relax on golden beaches, explore Portuguese heritage, and vibrant nightlife and peaceful coastal gems.",
//     },
//     {
//       image: "/domestic/loc4.png",
//       title: "North East",
//       description:
//         "Dive into untouched beauty, cultures, scenic valleys, and rich biodiversity of India's hidden paradise.",
//     },
//     {
//       image: "/domestic/loc5.png",
//       title: "Rishikesh",
//       description:
//         "Rishikesh offers sacred temples, thrilling rafting, peaceful yoga retreats, mountain views, and vibrant spirituality.",
//     },
//     {
//       image: "/domestic/loc6.png",
//       title: "Varanasi",
//       description:
//         "Varanasi blends sacred rituals, ancient ghats, vibrant culture, spiritual wisdom, and the eternal Ganges River beautifully.",
//     },
//     {
//       image: "/domestic/loc7.png",
//       title: "Gulmarg",
//       description:
//         "Gulmarg boasts snow-covered peaks, thrilling skiing, scenic meadows, pine forests, and breathtaking Himalayan views.",
//     },
//     {
//       image: "/domestic/loc8.png",
//       title: "Munnar",
//       description:
//         "Munnar offers lush tea gardens, misty hills, cool climate, scenic valleys, and peaceful natural beauty.",
//     },
//   ];

//   return (
//     <section className="trending-section">

//       <span className="trending-tag">
//         TRENDING DESTINATIONS
//       </span>

//       <h2 className="trending-heading">
//         Incredible India with Incredible Holidays
//       </h2>

//       <div className="destinations-grid">

//         {destinations.map((destination, index) => (
//           <div
//             className="destination-card"
//             key={index}
//           >
//             <div className="destination-image-wrapper">
//               <img
//                 src={destination.image}
//                 alt={destination.title}
//                 className="destination-image"
//               />
//             </div>

//             <div className="destination-content">

//               <h3>{destination.title}</h3>

//               <p>{destination.description}</p>

//             </div>
//           </div>
//         ))}

//       </div>

//       <Link
//         to="/contact"
//         className="customise-trip-btn"
//       >
//         Customise Your Trip
//         <FaArrowRight />
//       </Link>

//     </section>
//   );
// }

// export default TrendingDestinations;
// // .trending-section{
// //     max-width:1280px;

// //     margin:90px auto;

// //     padding:0 40px;

// //     text-align:center;
// // }

// // .trending-tag{
// //     display:block;

// //     color:#ff8236;

// //     font-size:15px;

// //     font-weight:700;

// //     letter-spacing:4px;

// //     margin-bottom:14px;
// // }

// // .trending-heading{
// //     font-family:
// //     "Cormorant Garamond",
// //     serif;

// //     font-size:52px;

// //     font-weight:600;

// //     color:#111;

// //     margin-bottom:55px;
// // }

// // /* GRID */

// // .destinations-grid{
// //     display:grid;

// //     grid-template-columns:
// //     repeat(4,1fr);

// //     gap:18px;
// // }

// // /* CARD */

// // .destination-card{
// //     background:#fff;

// //     border-radius:10px;

// //     overflow:hidden;

// //     box-shadow:
// //     0 5px 18px rgba(0,0,0,.06);

// //     transition:.3s;
// // }

// // .destination-image-wrapper{
// //     overflow:hidden;
// // }

// // .destination-image{
// //     width:100%;

// //     height:210px;

// //     object-fit:cover;

// //     transition:.45s ease;
// // }

// // /* IMAGE ENLARGES */

// // .destination-card:hover .destination-image{
// //     transform:scale(1.08);
// // }

// // .destination-content{
// //     padding:22px 18px 18px;
// // }

// // .destination-content h3{
// //     font-family:
// //     "Cormorant Garamond",
// //     serif;

// //     font-size:28px;

// //     font-weight:700;

// //     color:#111;

// //     margin-bottom:14px;
// // }

// // .destination-content p{
// //     color:#707070;

// //     font-size:14px;

// //     line-height:1.9;
// // }

// // /* BUTTON */

// // .customise-trip-btn{
// //     margin-top:45px;

// //     display:inline-flex;

// //     align-items:center;

// //     gap:10px;

// //     background:#ff8236;

// //     color:#fff;

// //     text-decoration:none;

// //     padding:16px 34px;

// //     border-radius:50px;

// //     font-weight:600;

// //     transition:.3s;
// // }

// // .customise-trip-btn:hover{
// //     background:#fff;

// //     color:#ff8236;

// //     border:1px solid #ff8236;
// // }

// // /* TABLET */

// // @media(max-width:1100px){

// //     .destinations-grid{
// //         grid-template-columns:
// //         repeat(2,1fr);
// //     }

// //     .trending-heading{
// //         font-size:42px;
// //     }
// // }

// // /* MOBILE */

// // @media(max-width:768px){

// //     .trending-section{
// //         padding:0 20px;
// //     }

// //     .destinations-grid{
// //         grid-template-columns:1fr;
// //     }

// //     .trending-heading{
// //         font-size:34px;
// //     }

// //     .destination-image{
// //         height:240px;
// //     }

// //     .customise-trip-btn{
// //         width:100%;

// //         justify-content:center;
// //     }
// // }
import "./TrendingDestinations.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function TrendingDestinations() {

  const destinations = [
    {
      image: "/domestic/loc1.png",
      title: "Rajasthan",
      description:
        "Experience regal heritage, majestic palaces, vibrant culture, and thrilling desert safaris in the Land of Kings.",
    },
    {
      image: "/domestic/loc2.png",
      title: "Kerala",
      description:
        "Unwind in lush backwaters, indulge in Ayurveda, and explore serene landscapes and rich local traditions.",
    },
    {
      image: "/domestic/loc3.png",
      title: "Goa",
      description:
        "Relax on golden beaches, explore Portuguese heritage, vibrant nightlife and peaceful coastal gems.",
    },
    {
      image: "/domestic/loc4.png",
      title: "North East",
      description:
        "Dive into untouched beauty, cultures, scenic valleys, and rich biodiversity of India's hidden paradise.",
    },
    {
      image: "/domestic/loc5.png",
      title: "Rishikesh",
      description:
        "Rishikesh offers sacred temples, thrilling rafting, peaceful yoga retreats, mountain views, and vibrant spirituality.",
    },
    {
      image: "/domestic/loc6.png",
      title: "Varanasi",
      description:
        "Varanasi blends sacred rituals, ancient ghats, vibrant culture, spiritual wisdom, and the eternal Ganges beautifully.",
    },
    {
      image: "/domestic/loc7.png",
      title: "Gulmarg",
      description:
        "Gulmarg boasts snow-covered peaks, thrilling skiing, scenic meadows, pine forests, and breathtaking Himalayan views.",
    },
    {
      image: "/domestic/loc8.png",
      title: "Munnar",
      description:
        "Munnar offers lush tea gardens, misty hills, cool climate, scenic valleys, and peaceful natural beauty.",
    },
  ];

  return (

    <section className="domestic-trending-section">

      <span className="domestic-trending-tag">
        TRENDING DESTINATIONS
      </span>

      <h2 className="domestic-trending-heading">
        Incredible India with Incredible Holidays
      </h2>

      <div className="domestic-destinations-grid">

        {destinations.map((destination, index) => (

          <div
            className="domestic-destination-card"
            key={index}
          >

            <div className="domestic-destination-image-wrapper">

              <img
                src={destination.image}
                alt={destination.title}
                className="domestic-destination-image"
              />

            </div>

            <div className="domestic-destination-content">

              <h3>
                {destination.title}
              </h3>

              <p>
                {destination.description}
              </p>

            </div>

          </div>

        ))}

      </div>

      <Link
        to="/contact"
        className="domestic-customise-trip-btn"
      >
        Customise Your Trip

        <FaArrowRight />

      </Link>

    </section>

  );
}

export default TrendingDestinations;