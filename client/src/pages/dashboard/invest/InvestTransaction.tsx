import {useSlider} from "../../../layout/Slider"
import BodyMyinvest from "./myinvest/BodyMyinvest"
import TopMyInvest from "./myinvest/TopMyInvest"


const InvestTransaction = () => {
  const {isOpen} = useSlider()
  return (
    <div style={{
      marginLeft: isOpen ? "90px" : "0px",
      transition: "margin 0.3s ease",
    }}>
      <TopMyInvest/>
      <BodyMyinvest/>
    </div>
  )
}

export default InvestTransaction