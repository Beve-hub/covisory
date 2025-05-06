import { useSlider } from "../../../layout/Slider"
import CurrencyCard from "../../../utills/reusable/CurrencyCard"
import BodyConvert from "./BodyConvert"
import TopConvert from "./TopConvert"



const Convert = () => {
  const {isOpen} = useSlider()
  return (
    <div style={{
      marginLeft: isOpen ? "90px" : "0px",
      transition: "margin 0.3s ease",
    }}>
      <TopConvert/>
      <CurrencyCard/>
      <BodyConvert/>
  </div>
  )
}

export default Convert