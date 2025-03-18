import IMG from "../../../../assets/es1a.jpg";
import IMG2 from "../../../../assets/es1b.jpg";
import { GiLaurelsTrophy } from "react-icons/gi";

const Sustain = () => {
  return (
    <section className="w-screen bg-[var(--text-white)] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
       
        {/* Text Content */}
        <div className="p-6">
          <p className="relative overflow-hidden max-w-[10rem] border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
            Who we are
            </span>
          </p>
          <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
          We sustain the environment we operate in
          </h2>
          <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
          Our corporate strategy policy is formed to ensure sustainable investments through beneficial engagement 
          that safeguards the interests of the environment, the community, and the government.
            <br/>
            <br/>
          Since 2011, we have endorsed the UN's Principles for Responsible Investment (PRI), and for the past four years,
          we have been given an A+ in both the Direct Private Equity Module and the Strategy and Governance Module.
          The Sustainability Report, which has been released annually since 2012, highlights the extensive Environmental,
          Social, and Governance (ESG) initiatives carried out at the portfolio companies of Covisory Holdings and 
          the Covisory Holdings Funds.
            </p>
        </div>

         {/* Image Section */}
         <div className="relative">
          <div className="bg-[var(--text-black)] h-[30rem] absolute opacity-30 top-0"></div>
          <img
            src={IMG}
            alt="Finance & Investment"
            className="w-full h-[20rem] object-cover"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          <img
            src={IMG2}
            alt="Finance & Investment"
            className="w-full h-[10rem] object-cover"
          />
          <div className=" bg-[var(--secondary-color)] px-4 py-2 items-center transition duration-700 ease-in-out">
            <GiLaurelsTrophy size={40} color="var(--primary-color)" />
            <div>
              <h2 className="text-xl font-bold">Corporate
              </h2>
              <h2 className="text-xl font-bold">
              Ethics Program</h2>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Sustain