import "./ElderTourism.css";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaHome,
  FaPlane,
  FaSuitcase,
  FaUserTie,
  FaUtensils,
  FaPhoneAlt,
  FaWheelchair,
  FaUsers,
  FaHotel,
  FaHeart,
  FaMapMarkedAlt,
} from "react-icons/fa";

function ElderTourism() {
  const exclusives = [
    {
      icon: <FaHome />,
      title: "Home-to-Home Pickup & Drop",
      text: "Comfortable pickup from home and safe drop-off after the journey.",
    },
    {
      icon: <FaPlane />,
      title: "Airport & Railway Assistance",
      text: "Dedicated assistance at airports and railway stations throughout the journey.",
    },
    {
      icon: <FaSuitcase />,
      title: "Porter Support",
      text: "Luggage handling assistance so travellers can travel comfortably without unnecessary hassle.",
    },
    {
      icon: <FaUserTie />,
      title: "Dedicated Tour Escort",
      text: "A dedicated escort during sightseeing with support throughout the journey.",
    },
    {
      icon: <FaUtensils />,
      title: "Daily Breakfast & Dinner",
      text: "Nutritious meals included daily for a convenient and worry-free experience.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "24×7 Support",
      text: "Round-the-clock support via call and WhatsApp for complete peace of mind.",
    },
    {
      icon: <FaWheelchair />,
      title: "Wheelchair Assistance",
      text: "Assistance arranged wherever required, including airports, stations and sightseeing locations.",
    },
    {
      icon: <FaHeart />,
      title: "Daily Family Updates",
      text: "Structured daily updates help families stay informed about their loved ones throughout the trip.",
    },
  ];

  const journeys = [
    {
      number: "01",
      duration: "7 DAYS",
      title: "Jyotirlinga & Ramayana Temple Journey",
      subtitle: "South India",
      image: "/elder/south.png",
      description:
        "A spiritual journey through Madurai, Rameswaram and Kumbakonam, combining sacred heritage with a relaxed pace and ample time for rest.",
      highlights: [
        "Meenakshi Amman Temple, Madurai",
        "Ramanathaswamy Temple & Dhanushkodi",
        "Adi Kumbeswarar Temple, Kumbakonam",
        "Comfortable travel with rest time",
      ],
    },
    {
      number: "02",
      duration: "6 DAYS",
      title: "Varanasi, Prayagraj & Ayodhya",
      subtitle: "Peace Journey",
      image: "/elder/varanasi.png",
      description:
        "A thoughtfully designed spiritual journey covering some of North India's most meaningful destinations with comfortable travel and personalised assistance.",
      highlights: [
        "Ganga Aarti at Dashashwamedh Ghat",
        "Triveni Sangam, Prayagraj",
        "Ayodhya's important heritage sites",
        "Leisurely pace with ample rest",
      ],
    },
    {
      number: "03",
      duration: "7 DAYS",
      title: "Madhya Pradesh Heritage & Wildlife",
      subtitle: "Heritage & Wildlife Journey",
      image: "/elder/madhya.png",
      description:
        "Explore Khajuraho, Orchha and Panna through a well-paced journey combining heritage, culture and wildlife experiences.",
      highlights: [
        "Khajuraho UNESCO World Heritage Site",
        "Orchha royal heritage",
        "Panna National Park safari",
        "Short and comfortable drives",
      ],
    },
    {
      number: "04",
      duration: "5 DAYS",
      title: "Odisha Temples, Art & Coast",
      subtitle: "Heritage & Coastal Journey",
      image: "/elder/odisha.png",
      description:
        "A compact journey through Bhubaneswar, Puri and Konark combining ancient temples, local art and the serene coastline.",
      highlights: [
        "Jagannath Temple, Puri",
        "UNESCO Sun Temple, Konark",
        "Lingaraj Temple, Bhubaneswar",
        "Raghurajpur art village",
      ],
    },
    {
      number: "05",
      duration: "7 DAYS",
      title: "Gujarat Pilgrimage, Wildlife & Heritage",
      subtitle: "Gujarat Journey",
      image: "/elder/gujarat.png",
      description:
        "A balanced Gujarat journey covering sacred destinations, heritage and a memorable wildlife experience at Gir.",
      highlights: [
        "Dwarkadhish Temple",
        "Somnath Temple & evening aarti",
        "Gir National Park safari",
        "Somnath beach sunset",
      ],
    },
    {
      number: "06",
      duration: "7 DAYS",
      title: "Kerala Relaxation Holiday",
      subtitle: "Nature & Wellness",
      image: "/elder/kerela.png",
      description:
        "A perfectly paced Kerala experience covering Kochi, Munnar and Kumarakom for travellers who value calm, comfort and natural beauty.",
      highlights: [
        "Fort Kochi heritage experience",
        "Munnar tea plantations",
        "Kumarakom backwaters",
        "Wellness and leisure experiences",
      ],
    },
    {
      number: "07",
      duration: "7 DAYS",
      title: "Bhutan Happiness Tour",
      subtitle: "International Journey",
      image: "/elder/bhutan.png",
      description:
        "A peaceful international journey through Paro, Thimphu and Punakha, combining scenic landscapes, monasteries and cultural experiences.",
      highlights: [
        "Buddha Dordenma",
        "Punakha Dzong",
        "Scenic Himalayan landscapes",
        "Slow-paced comfortable travel",
      ],
    },
    {
      number: "08",
      duration: "7 DAYS",
      title: "Nepal Spiritual & Himalayan Journey",
      subtitle: "Spiritual & Nature Journey",
      image: "/elder/nepal.png",
      description:
        "A soulful journey through Kathmandu, Pokhara and Chitwan blending spiritual heritage, Himalayan views and nature experiences.",
      highlights: [
        "Pashupatinath Temple",
        "Boudhanath Stupa",
        "Pokhara lakeside",
        "Optional Chitwan safari",
      ],
    },
    {
      number: "09",
      duration: "6 DAYS",
      title: "Sri Lanka Ramayana, Nature & Wildlife",
      subtitle: "International Journey",
      image: "/elder/srilanka.png",
      description:
        "A thoughtfully balanced Sri Lankan journey combining mythology, culture, scenic landscapes and wildlife.",
      highlights: [
        "Seetha Amman Temple",
        "Ashok Vatika",
        "Scenic hill regions",
        "Wildlife and cultural experiences",
      ],
    },
    {
      number: "10",
      duration: "7 DAYS",
      title: "Cambodia & Vietnam Heritage",
      subtitle: "International Journey",
      image: "/elder/cambodia.png",
      description:
        "Discover the ancient temples of Angkor and the vibrant culture of Vietnam through a comfortable and curated international journey.",
      highlights: [
        "Angkor temple exploration",
        "Local markets",
        "Ho Chi Minh City",
        "Optional Mekong Delta experience",
      ],
    },
    {
      number: "11",
      duration: "9 DAYS",
      title: "Japan Cultural Journey",
      subtitle: "Premium International Journey",
      image: "/elder/japan.png",
      description:
        "A refined journey across Tokyo, the Mount Fuji region, Kyoto and Osaka blending Japanese traditions with modern experiences.",
      highlights: [
        "Tokyo & Mount Fuji region",
        "Kyoto cultural experiences",
        "Osaka",
        "Scenic bullet train journey",
      ],
    },
  ];

  const advantages = [
    {
      icon: <FaUsers />,
      title: "Small Group Journeys",
      text: "Intimate groups allow for a more personal, attentive and comfortable travel experience.",
    },
    {
      icon: <FaHeart />,
      title: "Personalised Assistance",
      text: "Dedicated support at every stage of the journey for complete peace of mind.",
    },
    {
      icon: <FaHotel />,
      title: "Thoughtfully Selected Hotels",
      text: "Premium yet comfortable accommodations selected for accessibility, convenience and ease.",
    },
  ];

  return (
    <main className="elder-page">
      {/* ================= HERO ================= */}
      <section className="elder-hero">
        <div className="elder-hero-content">
          <div className="elder-hero-copy">
            <span className="elder-tag">HOLIDAYS FOR 60+</span>

            <h1>
              Travel With Comfort,
              <br />
              Care & <span>Confidence</span>
            </h1>

            <p>
              Thoughtfully designed journeys for senior travellers, combining
              relaxed itineraries, personalised assistance, premium stays and
              complete peace of mind.
            </p>

            <div className="elder-hero-buttons">
              <Link to="/contact" className="elder-primary-btn">
                Plan Their Journey
                <FaArrowRight />
              </Link>

              <a
                href="https://wa.me/919673443824"
                target="_blank"
                rel="noopener noreferrer"
                className="elder-whatsapp-btn"
              >
                Talk to a Travel Expert
              </a>
            </div>
          </div>

          <div className="elder-hero-image">
            <img
              src="/elder/elder-hero.png"
              alt="Senior travellers enjoying a comfortable journey"
            />
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="elder-intro">
        <div className="elder-intro-container">
          <div className="elder-intro-image">
            <img
              src="/elder/elder-intro.png"
              alt="Senior travellers enjoying a journey"
            />
          </div>

          <div className="elder-intro-content">
            <span className="elder-section-tag">A JOURNEY THEY DESERVE</span>

            <h2>
              Because they spent
              <br />
              years taking care of us.
            </h2>

            <p className="elder-lead">
              Now it is their turn to travel, discover and create memories at
              their own pace.
            </p>

            <p>
              Holidays for 60+ is a thoughtfully designed travel program created
              especially for senior travellers who prefer comfortable journeys,
              assisted travel and complete peace of mind.
            </p>

            <p>
              Even when you cannot travel with them, our dedicated team stays
              with them throughout the journey — taking care of the details so
              they can simply relax and enjoy.
            </p>

            <div className="elder-stats">
              <div className="elder-stat">
                <strong>4–16</strong>
                <span>Guests Per Group</span>
              </div>

              <div className="elder-stat">
                <strong>60+</strong>
                <span>Age Group</span>
              </div>

              <div className="elder-stat">
                <strong>24×7</strong>
                <span>Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DIFFERENCE ================= */}
      <section className="elder-difference">
        <div className="elder-section-heading">
          <span className="elder-section-tag">TRAVEL, REIMAGINED</span>

          <h2>
            What Makes These Journeys
            <span> Different</span>
          </h2>

          <p>
            We focus on comfort and care rather than rushed itineraries. Every
            detail is planned to create a smooth, stress-free and enjoyable
            experience.
          </p>
        </div>

        <div className="elder-advantages">
          {advantages.map((item, index) => (
            <div className="elder-advantage-card" key={index}>
              <div className="elder-advantage-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXCLUSIVES ================= */}
      <section className="elder-exclusives">
        <div className="elder-exclusives-container">
          <div className="elder-exclusives-heading">
            <span className="elder-section-tag">INCREDIBLE EXCLUSIVES</span>

            <h2>
              More Than a Holiday.
              <br />
              <span>Complete Care.</span>
            </h2>

            <p>
              From the moment they leave home until they return, our team takes
              care of the details that make travel comfortable and worry-free.
            </p>
          </div>

          <div className="elder-exclusive-grid">
            {exclusives.map((item, index) => (
              <div className="elder-exclusive-card" key={index}>
                <div className="elder-exclusive-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOURNEYS ================= */}
      <section className="elder-journeys">
        <div className="elder-section-heading">
          <span className="elder-section-tag">CURATED JOURNEYS</span>

          <h2>
            Destinations Made
            <span> Comfortable</span>
          </h2>

          <p>
            Carefully selected domestic and international journeys designed
            around comfort, meaningful experiences and a relaxed pace.
          </p>
        </div>

        <div className="elder-journey-list">
          {journeys.map((journey) => (
            <article className="elder-journey-card" key={journey.number}>
              <div className="elder-journey-image">
                <img src={journey.image} alt={journey.title} />
                <span className="elder-journey-number">{journey.number}</span>
              </div>

              <div className="elder-journey-content">
                <div className="elder-journey-meta">
                  <span>{journey.duration}</span>
                  <span>ESCORTED SMALL GROUP JOURNEY</span>
                </div>

                <h3>{journey.title}</h3>
                <h4>{journey.subtitle}</h4>
                <p>{journey.description}</p>

                <div className="elder-highlight-title">
                  <FaMapMarkedAlt />
                  Highlights
                </div>

                <ul>
                  {journey.highlights.map((highlight, index) => (
                    <li key={index}>
                      <FaCheck />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="elder-journey-btn">
                  Enquire About This Journey
                  <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= CUSTOMISATION ================= */}
      <section className="elder-customisation">
        <div className="elder-customisation-container">
          <div className="elder-customisation-content">
            <span className="elder-section-tag">YOUR JOURNEY, YOUR WAY</span>

            <h2>
              Premium Travel,
              <br />
              <span>Thoughtfully Personalised</span>
            </h2>

            <p>
              Every traveller has different preferences. Our journeys can be
              customised around your comfort, interests and requirements.
            </p>

            <Link to="/contact" className="elder-primary-btn">
              Create a Custom Journey
              <FaArrowRight />
            </Link>
          </div>

          <div className="elder-customisation-points">
            <div>
              <strong>01</strong>
              <h3>Comfort First</h3>
              <p>
                Premium experiences without compromising on comfort or care.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Flexible Customisation</h3>
              <p>
                Services and itineraries can be tailored to individual
                preferences.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Transparent Costing</h3>
              <p>
                Detailed costing shared once the itinerary and services are
                finalised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="elder-final-cta">
        <div className="elder-final-overlay"></div>

        <div className="elder-final-content">
          <span>THEY DESERVE TO SEE THE WORLD</span>

          <h2>
            You May Not Be Able
            <br />
            to Travel With Them.
            <br />
            <em>But We Can.</em>
          </h2>

          <p>
            Give your loved ones a journey filled with comfort, care and
            unforgettable experiences.
          </p>

          <Link to="/contact" className="elder-final-btn">
            Start Planning Their Journey
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ElderTourism;