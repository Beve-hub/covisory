import {useSlider} from "../../../layout/Slider"
import BodySettings from "./BodySettings"
import TopSetting from "./TopSetting"

const Setting = () => {
    const {isOpen} = useSlider()
  return (
    <div style={{
        marginLeft: isOpen ? "70px" : "0px",
        transition: "margin 0.3s ease",
      }}>
        <TopSetting/>
        <BodySettings/>
      </div>
  )
}

export default Setting