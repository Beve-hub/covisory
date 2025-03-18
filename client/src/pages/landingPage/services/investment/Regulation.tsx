import IMG from "../../../../assets/direction.jpg";
import { GiLaurelsTrophy } from "react-icons/gi";


const Regulation = () => {
  return (
    <section className="w-screen bg-[var(--text-white)] py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

       {/* Image Section */}
       <div className="relative ">
      {/* First Image with Slant Effect */}
      <div className="bg-[var(--text-black)] h-[30rem] absolute opacity-30 top-0"></div>
      <img
        src={IMG}
        alt="Finance & Investment"
        className="w-full h-[30rem] object-cover clip-slant"
      />
      <div className="absolute flex left-0 top-12 bg-[var(--secondary-color)] px-4 py-2 items-center transition duration-700 ease-in-out ">
        <GiLaurelsTrophy size={40} color="var(--primary-color)"/>
        <div>
        <h2 className="text-xl font-bold">We're ready to
        </h2>
          <h2 className="text-xl font-bold">
          assist you</h2>
        </div>
         
        </div>
    </div>

    {/* Text Content */}
    <div className="p-6">
      <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
        Administration & Regulations
        </span>
       
      </p>
      <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
      Leadership, Oversight, and a Commitment to Responsible Practices
      </h2>
      <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
      Our board of directors leads the charge in overseeing responsible investment, 
      setting the tone and supporting a culture of ethical behavior throughout the organization. 
      With the managing director of our investment business at the helm—supported by the heads of our investment 
      divisions—we ensure daily accountability and strategic direction in our responsible investment practices. 
      We aim not only to meet the high ethical standards expected by our customers, regulators, and the public,
      but to pioneer innovative approaches within our sector. This commitment forms one of our four foundational pillars, 
      alongside our focus on people, society and communities, and environmental impact.
      </p>
    </div>
    </div>
  </section>
  )
}

export default Regulation