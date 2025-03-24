import ChangePass from "./ChangePass"
import Profileinput from "./Profileinput"
import Wallet from "./Wallet"


const Personal = () => {
  return (
    <div className="max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-6">
    <Profileinput/>
    <div>
     <Wallet/>
     <ChangePass/>
    </div>
   
   </div>
  )
}

export default Personal