import {useSlider} from "../../../layout/Slider"
import BodyWithdarw from "./withdraw/BodyWithdarw";
import TopWithdraw from "./withdraw/TopWithdraw";


const Withdraw = () => {
  const {isOpen} = useSlider();
  return (
    <div style={{
      marginLeft: isOpen ? "90px" : "0px",
      transition: "margin 0.3s ease",
    }}>
      <TopWithdraw/>
      <BodyWithdarw/>
    </div>
  )
}

export default Withdraw