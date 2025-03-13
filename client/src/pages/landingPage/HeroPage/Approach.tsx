import { FaUsers } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiChartDonutFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const images = [
    { icon: <FaUsers size={60} />, text: "Partnerships", desc: "Building the right network of trusted partners to enhance value." },
    { icon: <RiBankFill size={60}/>, text: "Sustainability", desc: "Driving investments with innovation that guarantees continuity." },
    { icon: <PiChartDonutFill size={60}/>, text: "ESG", desc: "Delivering a modern structure for responsible leadership at scale." },
];

const Approach = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-[var(--bg-white)] py-20 text-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-lg text-[var(--primary-color)] font-bold md:text-xl mt-4 max-w-2xl">
          What We Do?
        </h2>
        <p className="text-[var(--gray-color)] pb-10 text-lg text-balance max-w-[55rem]">
          Successful commercial investing depends on thorough analysis, not whimsical prediction. Go ahead, 
          <span 
            className="text-[var(--secondary-color)] text-lg font-bold cursor-pointer" 
            onClick={() => navigate('/login')}
          >
            Get started!
          </span>
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((item, index) => (
            <motion.div 
              key={index} 
              className="w-[20rem] p-6 flex flex-col items-center text-center rounded-lg bg-white shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[var(--light-logo)] text-[var(--secondary-color)] p-4 flex items-center justify-center rounded-full hover:bg-[var(--primary-light)] hover:text-[var(--primary-color)]">
                {item.icon}
              </div>
              <p className="text-xl py-2 font-bold text-[var(--text-black)] hover:text-[var(--secondary-color)]">{item.text}</p>
              <p className="text-[var(--text-black)] text-balance">{item.desc}</p>
              <motion.div
                className="flex items-center mt-4 overflow-hidden relative"
                whileHover={{ x: 10 }}
              >
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[var(--light-black)]"
                >
                  Read more
                </motion.span>
                <motion.div 
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2"
                >
                  <IoIosArrowRoundForward color="#121212" size={24} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
