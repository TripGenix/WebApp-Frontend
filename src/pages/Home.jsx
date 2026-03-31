import Hero from "../components/Home/Hero";
import ShotrestPath from "../components/Home/ShotrestPath";
import UserCoupan from "../components/Home/UserCoupan";
import PlanTrip from "../components/Home/planTrip";
import TourCatergory from "../components/homePage/TourCatergory";
import PopularDestination from "../components/homePage/PopularDestination";
import Footer from "../components/Footer";
import FooterNew from "../components/FooterNew";
import Gallery from "../components/Home/Gallery";
import AboutUs from "../components/homePage/AboutUs";

function Home() {
  return (
    <>
      <Hero />
      {/* <UserCoupan /> */}
      <PlanTrip />
      <ShotrestPath />
      <TourCatergory />
      <PopularDestination />
      <Gallery />
                 <AboutUs />

      <FooterNew />
    </>
  );
}

export default Home;
