import { useSlider } from "../../../layout/Slider"
import InvestCard from "./investDash/InvestCard"
import TopInvestDash from "./investDash/TopInvestDash"
import InvestTransaction from "./InvestTransaction"

const InvestDash = () => {
    const {isOpen} = useSlider()
  return (
    <div style={{
        marginLeft: isOpen ? "90px" : "0px",
        transition: "margin 0.3s ease",
      }}>
        <TopInvestDash/>
        <InvestCard/>
        <InvestTransaction/>
    </div>
  )
}

export default InvestDash