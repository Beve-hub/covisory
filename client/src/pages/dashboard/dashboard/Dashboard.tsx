import BodyDash from "./BodyDash"
import TopDash from "./TopDash"
import {useSlider} from "../../../layout/Slider"
import CoinList from "./CoinList";



const Dashboard = () => {
  const {isOpen} = useSlider();
  return (
    <div style={{
      marginLeft: isOpen ? "50px" : "0px",
      transition: "margin 0.3s ease",
      marginTop: '4rem'
    }}>
      <TopDash/>
      <CoinList/>
      <BodyDash/>
      
    </div>
  )
}

export default Dashboard