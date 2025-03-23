import BodyTrans from "./BodyTrans"
import TopTrans from "./TopTrans"
import {useSlider} from "../../../layout/Slider"


const Transaction = () => {
  const {isOpen} = useSlider();
  return (
    <div style={{
      marginLeft: isOpen ? "90px" : "0px",
      transition: "margin 0.3s ease",
    }}>
      <TopTrans/>
      <BodyTrans/>
    </div>
  )
}

export default Transaction