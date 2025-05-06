import BodyDash from "./BodyDash"
import TopDash from "./TopDash"
import {useSlider} from "../../../layout/Slider"
import CurrencyCard from "../../../utills/reusable/CurrencyCard";



const Dashboard = () => {
  const {isOpen} = useSlider();
  return (
    <div style={{
      marginLeft: isOpen ? "50px" : "0px",
      transition: "margin 0.3s ease",
      marginTop: '4rem'
    }}>
      <TopDash/>
      <CurrencyCard/>
      <BodyDash/>
      
    </div>
  )
}

export default Dashboard