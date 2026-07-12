// // import "./WhyChooseUs.css";

// // function WhyChooseUs() {

// //   const features = [
// //     {
// //       icon: "/hotel/ok1.png",
// //       title: "Trusted Partners",
// //       text: "We collaborate with verified hotels worldwide to ensure reliability, safety, and consistent quality in every stay."
// //     },
// //     {
// //       icon: "/hotel/ok2.png",
// //       title: "Exclusive Deals",
// //       text: "Unlock members-only discounts and limited-time offers, giving you luxury experiences at unbeatable prices."
// //     },
// //     {
// //       icon: "/hotel/ok3.png",
// //       title: "Personalized Support",
// //       text: "Get round-the-clock assistance for bookings, changes, or special requests, tailored to your travel needs."
// //     }
// //   ];

// //   return (
// //     <section className="why-section">

// //       <div className="why-container">

// //         <div className="why-left">

// //           <span className="why-tag">
// //             WHY CHOOSE US
// //           </span>

// //           <h2>
// //             Smart Stays,
// //             Seamless Booking
// //             Everywhere
// //           </h2>

// //           <p>
// //             Whether you're planning a luxury vacation,
// //             business trip, romantic escape, or family
// //             holiday, Incredible Holidays helps you find
// //             the perfect accommodation with confidence.
// //             Through our trusted hotel network and expert
// //             travel support, we make every stay
// //             comfortable, convenient, and memorable.
// //           </p>

// //         </div>

// //         <div className="why-right">

// //           {features.map((item, index) => (

// //             <div
// //               className="why-card"
// //               key={index}
// //             >

// //               <img
// //                 src={item.icon}
// //                 alt={item.title}
// //               />

// //               <h3>
// //                 {item.title}
// //               </h3>

// //               <p>
// //                 {item.text}
// //               </p>

// //             </div>

// //           ))}

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default WhyChooseUs;
// // // .why-section{
// // //     background:#f6f4f1;

// // //     padding:90px 0;
// // // }

// // // .why-container{
// // //     max-width:1280px;

// // //     margin:0 auto;

// // //     padding:0 40px;

// // //     display:grid;

// // //     grid-template-columns:
// // //     0.95fr 1.05fr;

// // //     gap:60px;

// // //     align-items:center;
// // // }

// // // /* LEFT */

// // // .why-tag{
// // //     display:block;

// // //     color:#ff8236;

// // //     font-size:15px;

// // //     font-weight:700;

// // //     letter-spacing:4px;

// // //     margin-bottom:18px;
// // // }

// // // .why-left h2{
// // //     font-family:
// // //     "Cormorant Garamond",
// // //     serif;

// // //     font-size:54px;

// // //     line-height:1.05;

// // //     font-weight:500;

// // //     color:#111;

// // //     margin-bottom:24px;
// // // }

// // // .why-left p{
// // //     color:#707070;

// // //     font-size:15px;

// // //     line-height:1.9;

// // //     max-width:500px;
// // // }

// // // /* RIGHT */

// // // .why-right{
// // //     display:grid;

// // //     grid-template-columns:
// // //     repeat(2,1fr);

// // //     gap:22px;
// // // }

// // // .why-card{
// // //     background:#fff;

// // //     padding:35px 28px;

// // //     box-shadow:
// // //     0 10px 25px
// // //     rgba(0,0,0,.05);

// // //     transition:.3s;
// // // }

// // // .why-card:hover{
// // //     transform:translateY(-5px);
// // // }

// // // .why-card:last-child{
// // //     grid-column:1/3;

// // //     max-width:340px;

// // //     justify-self:center;
// // // }

// // // .why-card img{
// // //     width:56px;

// // //     margin-bottom:18px;
// // // }

// // // .why-card h3{
// // //     font-family:
// // //     "Cormorant Garamond",
// // //     serif;

// // //     font-size:28px;

// // //     font-weight:500;

// // //     color:#111;

// // //     margin-bottom:12px;
// // // }

// // // .why-card p{
// // //     color:#707070;

// // //     font-size:14px;

// // //     line-height:1.8;
// // // }

// // // /* TABLET */

// // // @media(max-width:992px){

// // //     .why-container{
// // //         grid-template-columns:1fr;

// // //         gap:45px;
// // //     }

// // //     .why-left h2{
// // //         font-size:46px;
// // //     }
// // // }

// // // /* MOBILE */

// // // @media(max-width:768px){

// // //     .why-section{
// // //         padding:70px 0;
// // //     }

// // //     .why-container{
// // //         padding:0 20px;
// // //     }

// // //     .why-left h2{
// // //         font-size:36px;
// // //     }

// // //     .why-right{
// // //         grid-template-columns:1fr;
// // //     }

// // //     .why-card:last-child{
// // //         grid-column:auto;

// // //         max-width:none;
// // //     }

// // //     .why-card{
// // //         padding:28px 22px;
// // //     }

// // //     .why-card h3{
// // //         font-size:24px;
// // //     }
// // // }
// import "./WhyChooseUs.css";

// function WhyChooseUs() {

//   const features = [
//     {
//       icon: "/hotel/ok1.png",
//       title: "Trusted Partners",
//       text: "We collaborate with verified hotels worldwide to ensure reliability, safety, and consistent quality in every stay."
//     },
//     {
//       icon: "/hotel/ok2.png",
//       title: "Exclusive Deals",
//       text: "Unlock members-only discounts and limited-time offers, giving you luxury experiences at unbeatable prices."
//     },
//     {
//       icon: "/hotel/ok3.png",
//       title: "Personalized Support",
//       text: "Get round-the-clock assistance for bookings, changes, or special requests, tailored to your travel needs."
//     }
//   ];

//   return (
//     <section className="why-section">

//       <div className="why-container">

//         <div className="why-left">

//           <span className="why-tag">
//             WHY CHOOSE US
//           </span>

//           <h2>
//             Smart Stays,
//             Seamless Booking
//             Everywhere
//           </h2>

//           <p>
//             Whether you're planning a luxury vacation,
//             business trip, romantic escape, or family
//             holiday, Incredible Holidays helps you find
//             the perfect accommodation with confidence.
//             Through our trusted hotel network and expert
//             travel support, we make every stay
//             comfortable, convenient, and memorable.
//           </p>

//         </div>

//         <div className="why-right">

//           {features.map((item, index) => (

//             <div
//               className="why-card"
//               key={index}
//             >

//               <img
//                 src={item.icon}
//                 alt={item.title}
//               />

//               <h3>
//                 {item.title}
//               </h3>

//               <p>
//                 {item.text}
//               </p>

//             </div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default WhyChooseUs;
import "./WhyChooseUs.css";

function WhyChooseUs() {

  const features = [
    {
      icon: "/hotel/ok1.png",
      title: "Trusted Partners",
      text: "We collaborate with verified hotels worldwide to ensure reliability, safety, and consistent quality in every stay."
    },
    {
      icon: "/hotel/ok2.png",
      title: "Exclusive Deals",
      text: "Unlock members-only discounts and limited-time offers, giving you luxury experiences at unbeatable prices."
    },
    {
      icon: "/hotel/ok3.png",
      title: "Personalized Support",
      text: "Get round-the-clock assistance for bookings, changes, or special requests, tailored to your travel needs."
    }
  ];

  return (
    <section className="hotel-why-section">

      <div className="hotel-why-container">

        <div className="hotel-why-left">

          <span className="hotel-why-tag">
            WHY CHOOSE US
          </span>

          <h2>
            Smart Stays,
            Seamless Booking
            Everywhere
          </h2>

          <p>
            Whether you're planning a luxury vacation,
            business trip, romantic escape, or family
            holiday, Incredible Holidays helps you find
            the perfect accommodation with confidence.
            Through our trusted hotel network and expert
            travel support, we make every stay
            comfortable, convenient, and memorable.
          </p>

        </div>

        <div className="hotel-why-right">

          {features.map((item, index) => (

            <div
              className="hotel-why-card"
              key={index}
            >

              <img
                src={item.icon}
                alt={item.title}
              />

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;