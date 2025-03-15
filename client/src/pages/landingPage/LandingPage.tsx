
import AboutUs from './HeroPage/AboutUs';
import Approach from './HeroPage/Approach';
import Choose from './HeroPage/Choose';
import Grow from './HeroPage/Grow';
import HeroPage from './HeroPage/HeroPage';
import Services from './HeroPage/Services';
import Slide from './HeroPage/Slide';
import TestimonialCard from './HeroPage/Testimonia';
import Views from './HeroPage/Views';



const LandingPage = () => {
  return (
    <>
        <HeroPage/>
        <Approach/>
        <AboutUs/>
        <Grow/>
        <Choose/>
        <Services/>
        <Slide/>
        <TestimonialCard/>
        <Views/>
    </>
  )
}

export default LandingPage