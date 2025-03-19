import BodyDI from "./BodyDI"
import Companies from "./Companies"
import Diversity from "./Diversity"
import Investor from "./Investor"
import Lead from "./Lead"
import Promote from "./Promote"
import Retain from "./Retain"
import TopDI from "./TopDI"
import Under from "./Under"

const DI = () => {
  return (
    <>
      <TopDI/>
      <BodyDI/>
      <Investor/>
      <Promote/>
      <Lead/>
      <Under/>
      <Companies/>
      <Retain/>
      <Diversity/>
    </>
  )
}

export default DI