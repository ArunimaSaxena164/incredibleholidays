import "./SeasonalDestinations.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function SeasonalDestinations() {
const data = {

  jan: {

    india: [

      { name:"Rajasthan", image:"/seasonal/jan-india/Rajasthan.png",description:"Jaipur, Udaipur, Jaisalmer, and Jodhpur before the summer heat." },
      { name:"Himachal Pradesh", image:"/seasonal/jan-india/Himachal.png", description:"Snowy landscapes in Shimla, Manali, Kufri; great for winter sports." },
      { name:"Madhya Pradesh", image:"/seasonal/jan-india/Madhya-Pradesh.png",description:"Best for wildlife safaris in Bandhavgarh, Kanha, and Pench before the summer heat." },
      { name:"North East", image:"/seasonal/jan-india/North-East.png",description:"(Sikkim & West Bengal Hilly Areas) Darjeeling, Gangtok, Pelling for scenic views." },
      { name:"Goa", image:"/seasonal/jan-india/Goa.png",description:"Peak season for beaches, nightlife, and post-New Year celebrations." },
        { name:"Uttarakhand", image:"/seasonal/jan-india/Uttarakhand.png",description:"Snowy landscapes in Shimla, Manali, Kufri; great for winter sports."},
          { name:"Tamil Nadu", image:"/seasonal/jan-india/Tamil-nadu.png" , description:"Chennai, Mahabalipuram, and Ooty enjoy comfortable weather."},
           { name:"Nepal", image:"/seasonal/jan-india/Nepal.png",description:"Kathmandu, Pokhara, and Chitwan National Park before the monsoon." },
      { name:"Kerala", image:"/seasonal/jan-india/Kerela.png",description:"Houseboats in Alleppey, Munnar tea estates, and backwaters." },
      
    
      { name:"Andaman & Nicobar", image:"/seasonal/jan-india/Andaman.png",description:"Clear waters, scuba diving, and perfect island weather." },
      
    
      { name:"Meghalaya & Assam", image:"/seasonal/jan-india/Meghalaya-Assam.png",description:"Shillong, Cherrapunji, and Kaziranga National Park (best for wildlife spotting)." },
      
     
      { name:"Uttar Pradesh Spiritual Triangle", image:"/seasonal/jan-india/Uttar-Pradesh.png",description:"Ayodhya, Prayagraj, and Varanasi during Makar Sankranti and Kumbh Mela (if applicable)." }
    ],

    international: [

      { name:"Dubai & UAE", image:"/seasonal/jan-international/dubai.png" , description:"Cool weather for desert safaris, Burj Khalifa, and shopping festivals."},
      { name:"Europe", image:"/seasonal/jan-international/europe.png",description:"Paris, Switzerland, Austria, and Italy offer charming winter to early spring experiences." },
      { name:"Vietnam & Cambodia", image:"/seasonal/jan-international/vietnam.png" , description:"Perfect time for Halong Bay cruises and Angkor Wat exploration."},
      { name:"Georgia (Tbilisi, Gudauri, Kazbegi)", image:"/seasonal/jan-international/georgia.png",description:"Skiing in Gudauri and spring blossoms in Tbilisi." },
      { name:"Thailand", image:"/seasonal/jan-international/thailand.png",description:"Ideal for island hopping in Phuket, Krabi, and Phi Phi Islands" },
      { name:"Japan", image:"/seasonal/jan-international/japan.png",description:"Cherry blossom season (March-April) in Tokyo and Kyoto." },
      { name:"Azerbaijan (Baku)", image:"/seasonal/jan-international/azerbaijan.png",description:"Comfortable weather for exploring the old city and Gobustan Mud Volcanoes." },
      { name:"Singapore", image:"/seasonal/jan-international/singapore.png",description:"Comfortable climate for Universal Studios, Gardens by the Bay, and Sentosa."},
      
      
      { name:"Turkey", image:"/seasonal/jan-international/turkey.png",description:"Pleasant temperatures in Istanbul, Cappadocia, and Pamukkale." },      
    
    { name:"Kazaksthan (Almaty)", image:"/seasonal/jan-international/kazakasthan.png",description:"Snow-covered mountains make it great for winter sports." }


    ]

  },

  may: {

    india: [

      { name:"Ladakh", image:"/seasonal/may-india/ladakh.png", description:"Road trips open in May; stunning landscapes, monasteries, and adventure." },
      { name:"Meghalaya & Assam", image:"/seasonal/may-india/meghalaya.png" , description:"Lush greenery with mesmerizing waterfalls in Cherrapunji and Mawlynnong."},
       { name:"Andaman & Nicobar", image:"/seasonal/may-india/andaman.png", description:"Still good for diving and exploring islands in early summer." },
       { name:"Bhutan", image:"/seasonal/may-india/bhutan.png",description:"Thimphu and Paro remain scenic, though heavy monsoons may limit trekking." },
      { name:"Himachal Pradesh", image:"/seasonal/may-india/himachal.png" ,description:"Shimla, Manali, Spiti Valley, and Dharamshala offer a cool escape."},
      { name:"North East (Sikkim & West Bengal Hilly Areas)", image:"/seasonal/may-india/north-east.png",description:"Gangtok, Nathula Pass, and Darjeeling in pleasant weather." },
      { name:"Uttar Pradesh Spiritual Triangle", image:"/seasonal/may-india/uttarpradesh.png",description:"Varanasi, Prayagraj, and Ayodhya remain spiritual hubs even in monsoon." },
      { name:"Uttarakhand", image:"/seasonal/may-india/uttarakhand.png",description:"Nainital, Mussoorie, Valley of Flowers (July-Aug), and Char Dham Yatra." },
      
      
      { name:"Kerala", image:"/seasonal/may-india/kerela.png" , description:"Monsoon rejuvenation with Ayurveda in Munnar, Wayanad, and Thekkady."},
     
      
      { name:"Nepal", image:"/seasonal/may-india/nepal.png",description:"Pokhara and Kathmandu become lush, but some trekking routes are challenging due to rain." },
      

    ],

    international: [

      { name:"Switzerland & Europe", image:"/seasonal/may-international/switzerland.png" , description:"Best for Alps, countryside tours, and cultural festivals."},
       { name:"Maldives & Seychelles", image:"/seasonal/may-international/maldives.png", description:"Perfect for luxury water villas and snorkeling." },
        { name:"Australia & New Zealand", image:"/seasonal/may-international/australia.png",description:"Ideal for winter activities in Queenstown and Sydney sightseeing." },
         { name:"Georgia (Tbilisi, Batumi, Kazbegi)", image:"/seasonal/may-international/georgia.png",description:"Perfect for hiking and visiting the Black Sea coast in Batumi." },
      { name:"UK & Scotland", image:"/seasonal/may-international/uk.png",description:"London, Edinburgh, and the Scottish Highlands in peak summer beauty." },
      { name:"Bali & Indonesia", image:"/seasonal/may-international/bali.png",description:"Dry season, ideal for beach resorts and island hopping." },
      { name:"Azerbaijan (Baku)", image:"/seasonal/may-international/azerbaijan.png",description:"Warm weather, ideal for exploring the city and beaches near the Caspian Sea." },
      { name:"Canada & Alaska", image:"/seasonal/may-international/canada.png" ,description:"Great for Niagara Falls, Banff National Park, and Alaska cruises."},
     
      
      { name:"South Africa", image:"/seasonal/may-international/south-africa.png",description:"Great for safaris in Kruger National Park and Cape Town exploration." },
     
      
      { name:"Kazaksthan (Almaty)", image:"/seasonal/may-international/kazakasthan.png" ,description:"Great time for nature lovers exploring Charyn Canyon and Big Almaty Lake."},
     
    ]

  },

  sep: {

    india: [

      { name:"Rajasthan", image:"/seasonal/sep-india/Rajasthan.png",description:"Peak season for Jaipur, Jaisalmer Desert Safari, and Pushkar Camel Fair (Nov)." },
      { name:"Kerala", image:"/seasonal/sep-india/kerela.png" , description:"Houseboats and backwaters are charming post-monsoon."},
      { name:"North East (Sikkim and West Bengal Hilly Areas)", image:"/seasonal/sep-india/northeast.png",description:"Best for Darjeeling tea estates and Gangtok sightseeing." },
       { name:"Bhutan", image:"/seasonal/sep-india/bhutan.png" ,description:"Perfect season for Punakha Dzong and Paro sightseeing."},
      { name:"Goa", image:"/seasonal/sep-india/goa.png",description:"Festive vibes with Christmas & New Year beach parties." },
      { name:"Himachal Pradesh & Uttarakhand", image:"/seasonal/sep-india/himachal.png",description:"Early snowfall in Manali, Auli, and Mussoorie." },
      { name:"Uttar Pradesh Spiritual Triangle", image:"/seasonal/sep-india/uttar-pradesh.png",description:"Diwali in Ayodhya and Varanasi is a magical experience." },
      { name:"Kashmir", image:"/seasonal/sep-india/kashmir.png",description:"Autumn in September (golden landscapes), winter snow in Gulmarg by December." },
      
      
      { name:"Meghalaya & Assam", image:"/seasonal/sep-india/meghalaya.png" , description:"Post-monsoon landscapes are vibrant, ideal for Shillong and Kaziranga safaris."},
      
      
      { name:"Nepal", image:"/seasonal/sep-india/nepal.png" ,description:"Best time for Everest trekking and Pokhara sightseeing."}
     
    ],

    international: [

      { name:"Dubai & UAE", image:"/seasonal/sep-international/dubai.png", description:"Peak travel time for luxury, shopping, and desert adventures." },
      { name:"Japan", image:"/seasonal/sep-international/japan.png",description:"Autumn foliage in October-November, ski season starts in December." },
      { name:"South Africa", image:"/seasonal/sep-international/south-africa.png",description:"Cape Town, Garden Route, and Kruger safaris remain pleasant." },
         { name:"Kazaksthan (Almaty)", image:"/seasonal/sep-international/kazakasthan.png",description:"Ski resorts open in December; a winter wonderland." },
      { name:"Maldives & Seychelles", image:"/seasonal/sep-international/maldives.png",description:"Stunning beach weather for romantic vacations." },
       { name:"Europe", image:"/seasonal/sep-international/europe.png",description:"Christmas markets in Germany, Austria, and Switzerland; Northern Lights in Scandinavia." },
       { name:"Australia & New Zealand", image:"/seasonal/sep-international/australia.png",description:"Summer season begins, perfect for road trips and beaches."},
       { name:"Georgia (Tbilisi, Gudauri, Kazbegi)", image:"/seasonal/sep-international/georgia.png" , description:"Best for skiing and festive celebrations."},
      { name:"Thailand, Vietnam & Singapore", image:"/seasonal/sep-international/thailand.png",description:"Comfortable weather for exploration and shopping." },
      
     
      { name:"USA (New York, California, Florida)", image:"/seasonal/sep-international/usa.png",description:"Best time for autumn colors and holiday season."},
      
      
      { name:"Azerbaijan (Baku)", image:"/seasonal/sep-international/baku.png",description:"Winter season brings Christmas festivities and New Year celebrations." }
   
      
    ]

  }

};
  const [season, setSeason] = useState("jan");
  const [category, setCategory] = useState("india");

  const destinations = data[season][category];

const col1 = destinations.slice(0, 4);
const col2 = destinations.slice(4, 7);
const col3 = destinations.slice(7);

const renderCard = (item, index) => (
  <Link
    to="/contact"
    className="destination-card"
    key={index}
  >
    <img
      src={item.image}
      alt={item.name}
    />

    <div className="destination-overlay">

      <div className="overlay-content">

        <h3>{item.name}</h3>

        <p>
          {item.description ||
            "Experience breathtaking landscapes and unforgettable journeys."}
        </p>

        <div className="overlay-arrow">
          <FaArrowRight />
        </div>

      </div>

    </div>

  </Link>
);

return (
  <section className="seasonal-section">

    <div className="seasonal-header">

      <span className="seasonal-tag">
        DISCOVER THE WORLD AT ITS FINEST THROUGHOUT THE YEAR
      </span>

      <h2 className="seasonal-title">
        Explore Destinations By Season
      </h2>

    </div>

    <div className="season-tabs">

      <button
        className={season === "jan"
          ? "season-btn active-season"
          : "season-btn"}
        onClick={() => setSeason("jan")}
      >
        January - April
      </button>

      <button
        className={season === "may"
          ? "season-btn active-season"
          : "season-btn"}
        onClick={() => setSeason("may")}
      >
        May - August
      </button>

      <button
        className={season === "sep"
          ? "season-btn active-season"
          : "season-btn"}
        onClick={() => setSeason("sep")}
      >
        September - December
      </button>

    </div>

    <div className="country-tabs">

      <button
        className={category === "india"
          ? "country-btn active-country"
          : "country-btn"}
        onClick={() => setCategory("india")}
      >
        India
      </button>

      <button
        className={category === "international"
          ? "country-btn active-country"
          : "country-btn"}
        onClick={() => setCategory("international")}
      >
        International
      </button>

    </div>

    <div className="destination-grid">

      <div className="destination-column">
        {col1.map((item, index) =>
          renderCard(item, index)
        )}
      </div>

      <div className="destination-column">
        {col2.map((item, index) =>
          renderCard(item, index + 100)
        )}
      </div>

      <div className="destination-column">
        {col3.map((item, index) =>
          renderCard(item, index + 200)
        )}
      </div>

    </div>

  </section>
);
}

export default SeasonalDestinations;