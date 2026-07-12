// import "./TrendingDestinations.css";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// function TrendingDestinations() {
//   const destinations = [
//     {
//       image: "/international/loc1.png",
//       title: "Dubai & UAE",
//       description:
//         "Discover soaring skylines, lavish escapes, rich culture, and desert thrills in Dubai, the City of Gold.",
//     },
//     {
//       image: "/international/loc2.png",
//       title: "Switzerland",
//       description:
//         "Embrace snow-capped peaks, serene lakes, charming villages, and timeless elegance in the Heart of the Alps.",
//     },
//     {
//       image: "/international/loc3.png",
//       title: "Bali & Indonesia",
//       description:
//         "Sacred temples, vibrant culture, lush islands, tropical beauty, and spiritual charm in Bali and Indonesia.",
//     },
//     {
//       image: "/international/loc4.png",
//       title: "Australia",
//       description:
//         "Golden beaches, vibrant cities, ancient culture, wildlife, and epic landscapes await.",
//     },
//     {
//       image: "/international/loc5.png",
//       title: "Maldives",
//       description:
//         "Crystal-clear waters, overwater villas, vibrant marine life, serene beaches, and tropical luxury in the Maldives.",
//     },
//     {
//       image: "/international/loc6.png",
//       title: "Thailand",
//       description:
//         "Golden temples, vibrant street life, exotic islands, rich traditions, and flavorful cuisine in the Land of Smiles.",
//     },
//     {
//       image: "/international/loc7.png",
//       title: "Europe",
//       description:
//         "Experience charming cities, iconic art, diverse cultures, and rich history across enchanting Europe.",
//     },
//     {
//       image: "/international/loc8.png",
//       title: "Azerbaijan (Baku)",
//       description:
//         "Explore ancient architecture, modern marvels, rich culture, and Caspian charm in vibrant Baku, Azerbaijan.",
//     },
//   ];

//   return (
//     <section className="trending-section">

//       <span className="trending-tag">
//         TOP DESTINATIONS
//       </span>

//       <h2 className="trending-heading">
//        Explore Top Destinations In The World
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
      image: "/international/loc1.png",
      title: "Dubai & UAE",
      description:
        "Discover soaring skylines, lavish escapes, rich culture, and desert thrills in Dubai, the City of Gold.",
    },
    {
      image: "/international/loc2.png",
      title: "Switzerland",
      description:
        "Embrace snow-capped peaks, serene lakes, charming villages, and timeless elegance in the Heart of the Alps.",
    },
    {
      image: "/international/loc3.png",
      title: "Bali & Indonesia",
      description:
        "Sacred temples, vibrant culture, lush islands, tropical beauty, and spiritual charm in Bali and Indonesia.",
    },
    {
      image: "/international/loc4.png",
      title: "Australia",
      description:
        "Golden beaches, vibrant cities, ancient culture, wildlife, and epic landscapes await.",
    },
    {
      image: "/international/loc5.png",
      title: "Maldives",
      description:
        "Crystal-clear waters, overwater villas, vibrant marine life, serene beaches, and tropical luxury in the Maldives.",
    },
    {
      image: "/international/loc6.png",
      title: "Thailand",
      description:
        "Golden temples, vibrant street life, exotic islands, rich traditions, and flavorful cuisine in the Land of Smiles.",
    },
    {
      image: "/international/loc7.png",
      title: "Europe",
      description:
        "Experience charming cities, iconic art, diverse cultures, and rich history across enchanting Europe.",
    },
    {
      image: "/international/loc8.png",
      title: "Azerbaijan (Baku)",
      description:
        "Explore ancient architecture, modern marvels, rich culture, and Caspian charm in vibrant Baku, Azerbaijan.",
    },
  ];

  return (

    <section className="domestic-trending-section">

      <span className="domestic-trending-tag">
        TOP DESTINATIONS
      </span>

      <h2 className="domestic-trending-heading">
        Explore Top Destinations In The World
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