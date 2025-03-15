import IMG from "../../../../assets/b1.jpg";
import IMG2 from "../../../../assets/b2.jpg";
import { GiLaurelsTrophy } from "react-icons/gi";


const BodyCom = () => {
  return (
    <section className="w-screen bg-gray-100 py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Text Content */}
    <div className="p-6">
      <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
        Welcome to Covisory Holdings
        </span>
       
      </p>
      <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
        We Are Finance & Investment Manager Since 1996
      </h2>
      <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
        Covisory Holdings manages diverse fund strategies, investing across the risk/return spectrum for esteemed clients, 
        including corporate and public pension plans, financial institutions, family offices, and sovereign entities.
        <br />
        <br/>
        Our success lies in empowering high-potential companies with operational expertise, industry insights, and global perspectives.
        Built on autonomous ownership, financial stability, and value-driven management, we prioritize fundamental research, 
        diverse viewpoints, and teamwork. Our culture upholds a strong fiduciary duty to clients and Plan shareholders.
        <br />
        <br />
        Since inception, we have expanded globally, offering in-depth research and strategic investments. 
        We remain committed to deep fundamental analysis, long-term investment outlooks, and quantitative discipline to drive strong 
        results. Covisory Holdings was founded to challenge overpriced investment products, focusing on client-first strategies that 
        preserve and enhance capital with transparent, fair fees. These principles continue to define us 14 years later.
      </p>
    </div>

    {/* Image Section */}
    <div className="relative ">
      {/* First Image with Slant Effect */}
      <div className="bg-[var(--text-black)] h-[30rem] absolute opacity-30 top-0"></div>
      <img
        src={IMG}
        alt="Finance & Investment"
        className="w-full h-[30rem] object-cover clip-slant"
      />

      {/* Second Image Positioned Bottom-Left */}
      <div className="absolute right-0 top-80 clip-slant">
        
      <img
          src={IMG2}
          alt="Finance & Investment"
          className="w-[20rem] h-auto object-cover shadow-xl"
        />
      </div>
      <div className="absolute flex left-0 top-12 bg-[var(--secondary-color)] px-4 py-2 items-center transition duration-700 ease-in-out ">
        <GiLaurelsTrophy size={40} color="var(--primary-color)"/>
        <div>
        <h2 className="text-xl font-bold">Corporate</h2>
          <h2 className="text-xl font-bold">
          Ethics Program</h2>
        </div>
         
        </div>
    </div>
    </div>
  </section>
  )
}

export default BodyCom