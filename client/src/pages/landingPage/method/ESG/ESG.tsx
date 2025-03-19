import Account from "./Account"
import Holding from "./Holding"
import Integration from "./Integration"
import Objective from "./Objective"
import Purpose from "./Purpose"
import Respond from "./Respond"
import Succes from "./Succes"
import Sustain from "./Sustain"
import TopES from "./TopES"

const ESG = () => {
  return (
    <>
      <TopES/>
      <Sustain/>
      <Holding/>
      <Succes/>
      <Integration/>
      <Objective/>
      <Purpose/>
      <Account/>
      <Respond/>
    </>
  )
}

export default ESG