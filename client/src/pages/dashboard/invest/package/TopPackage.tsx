import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const TopPackage = () => {
  const navigate = useNavigate();
  return (
    <div
    
    >
      <div className="absolute top-20 left-10 lg:left-[12rem]">
        <div className="flex items-center gap-14">
        <div className="border p-2 rounded-full"
        onClick={()=> navigate('/investDashboard')}>
        <MdArrowBack size={24}/>
        </div>
        <p className="font-bold text-2xl">Packages</p>
        </div>
       
      </div>
    </div>
  )
}

export default TopPackage