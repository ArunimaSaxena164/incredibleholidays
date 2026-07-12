import React from 'react';
import DomesticHero from '../../components/Services/Hotel/DomesticHero';
import DomesticInfo from '../../components/Services/Hotel/DomesticInfo';
import IconicSpots from '../../components/Services/Hotel/IconicSpots';
import WhyChooseUs from '../../components/Services/Hotel/WhyChooseUs';
function HotelBooking() {
    return ( 
        <>
        <DomesticHero/>
        <DomesticInfo/>
        <WhyChooseUs/>
        <IconicSpots/>
        </>
     );
}

export default HotelBooking;