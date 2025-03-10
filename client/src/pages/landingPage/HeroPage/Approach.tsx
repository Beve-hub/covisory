import { FaUsers } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
const images = [
    { icon: <FaUsers />, text: "Partnerships", desc: "Building the right network of trusted partners to enhance value." },
    { icon: <RiBankFill />, text: "Sustainability", desc: "Driving investments with innovation that guarantees continuity.." },
    { icon: <RiBankFill />, text: "ESG", desc: "Delivering a modern structure for responsible leadership at scale." },
];
const Approach = () => {
  return (
    <section className="bg-[#F5F5F5] py-20">
            <div className="container mx-auto flex flex-col items-center justify-center">
            <p className="text-lg md:text-xl text-center mt-4 max-w-2xl">Our Approach</p>
           <p>Successful commercial investing depends on thorough analysis, not whimsical prediction. Go ahead, get started!</p>
            
            
            </div>
        </section>
  )
}

export default Approach