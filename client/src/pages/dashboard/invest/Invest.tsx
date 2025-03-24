import BodyPackage from "./package/BodyPackage"
import TopPackage from "./package/TopPackage"
import {useSlider} from "../../../layout/Slider"


const Package = () => {
  const {isOpen} = useSlider()
  return (
    <div style={{
      marginLeft: isOpen ? "90px" : "0px",
      transition: "margin 0.3s ease",
    }}>
      <TopPackage/>
      <BodyPackage/>
    </div>
  )
}

export default Package