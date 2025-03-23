import BodyDeposit from "./deposit/BodyDeposit"
import TopDeposit from "./deposit/TopDeposit"
import {useSlider} from "../../../layout/Slider"


const Deposit = () => {
  const {isOpen} = useSlider();
  return (
    <div style={{
      marginLeft: isOpen ? "90px" : "0px",
      transition: "margin 0.3s ease",
    }}>
      <TopDeposit/>
      <BodyDeposit/>
    </div>
  )
}

export default Deposit