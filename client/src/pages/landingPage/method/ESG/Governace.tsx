import IMG from "../../../../assets/6c.jpg";
import { FaCheck } from "react-icons/fa";

const Governace = () => {
  return (
    <section className=" py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
     

     {/* Image Section */}
     <div className="relative">
        <div className="bg-[var(--text-black)] h-[30rem] absolute opacity-30 top-0"></div>
        <img
          src={IMG}
          alt="Finance & Investment"
          className="w-full h-[30rem] object-cover"
        />
        
      </div>


     {/* Text Content */}
     <div className="p-6">
     <h2 className="text-[var(--text-black)] text-start font-bold text-xl py-4">
        Governace Objectives
        </h2>
        <ul className="grid gap-4">
            <li className="flex item-center gap-4 "> <FaCheck size={24} color="var(--primary-color)" />
             <span className="text-lg">Regularly convene with our ESG Taskforce to discuss the goals, strategy, and management of our ESG Program</span></li>
            <li className="flex item-center gap-4 "> <FaCheck size={24} color="var(--primary-color)" />
             <span className="text-lg">Align our program with sustainability reporting frameworks such as GRESB to improve overall ESG performance and increase transparency</span></li>
            <li className="flex item-center gap-4 "> <FaCheck size={24} color="var(--primary-color)" />
             <span className="text-lg">Continue to participate in industry organizations and associations designed to facilitate communication, transparency, and the sharing of knowledge.</span></li>
            <li className="flex item-center gap-4 "> <FaCheck size={24} color="var(--primary-color)" />
             <span className="text-lg">Hold annual investor meetings for all active funds (including Advisory Board meetings) to ensure transparent communication </span></li>
            <li className="flex item-center gap-4 "> <FaCheck size={24} color="var(--primary-color)" />
             <span className="text-lg">Continue to exceed or comply with all national, state, and local labor laws and regulation standards </span></li>
        </ul>
      </div>

      

      
    </div>
  </section>
  )
}

export default Governace