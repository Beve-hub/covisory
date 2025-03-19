import IMG from "../../../../assets/6b.jpg";
import { FaCheck } from "react-icons/fa";

const Social = () => {
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
        Social Objectives
        </h2>
        <ul className="grid gap-4">
            <li className="flex item-center gap-4 "> <FaCheck size={24} color="var(--primary-color)" />
             <span className="text-lg">Encourage employee involvement and open communication through the deployment of our annual employee survey.</span></li>
            <li className="flex item-center gap-4 "> <FaCheck size={24} color="var(--primary-color)" />
             <span className="text-lg">Facilitate better employee health and well-being through improved indoor air quality.</span></li>
            <li className="flex item-center gap-4 "> <FaCheck size={24} color="var(--primary-color)" />
             <span className="text-lg">Implementing casual dress Fridays for employees who donate $10 each </span></li>
            <li className="flex item-center gap-4 "> <FaCheck size={24} color="var(--primary-color)" />
             <span className="text-lg">Collaborate with our joint venture partners on implementing, tracking, and reporting our ESG initiatives </span></li>
            <li className="flex item-center gap-4 "> <FaCheck size={24} color="var(--primary-color)" />
             <span className="text-lg">Partnered with ThinkHR to conduct anti-harassment training for all employees </span></li>
        </ul>
      </div>

      

      
    </div>
  </section>
  )
}

export default Social