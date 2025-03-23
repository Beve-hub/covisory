import BodyDash from "./BodyDash"
import TopDash from "./TopDash"
import {useSlider} from "../../../layout/Slider"
import TransSide from "./TransSide";



const Dashboard = () => {
  const {isOpen} = useSlider();
  return (
    <div style={{
      marginLeft: isOpen ? "90px" : "0px",
      transition: "margin 0.3s ease",
      marginTop: '4rem'
    }}>
      <TopDash/>
      <BodyDash/>
      <TransSide/>
    </div>
  )
}

export default Dashboard