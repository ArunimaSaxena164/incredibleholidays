import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import SeasonalDestinations from "../components/Home/SeasonalDestinations";
import Testimonials from "../components/Home/Testimonials";
import TravellerTypes from "../components/Home/TravellerTypes";

function Home() {

  return (
    <>
      <HeroSection />
      <AboutSection/>

      <SeasonalDestinations />

      <WhyChooseUs />

      <Testimonials />

      <TravellerTypes />

    </>
  );
}

export default Home;