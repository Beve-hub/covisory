import IMG from "../../../../assets/investment.jpg";
import { GiLaurelsTrophy } from "react-icons/gi";


const BodyInvest = () => {
  return (
    <section className="w-screen bg-[var(--text-white)] py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Text Content */}
    <div className="p-6">
      <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
        Responsible Investment Strategy
        </span>
       
      </p>
      <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
      Sustainable Growth Through Strategic Investments
      </h2>
      <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
      At Glow Holdings, we are committed to making wise investments that support the growth of emerging businesses while aligning with evolving environmental,
       social, and governance (ESG) priorities. By leveraging our own capital alongside that of global investment partners—including pension funds, sovereign wealth funds, 
       insurance companies, foundations, family offices, and high-net-worth individuals—we help investors achieve their financial goals for the benefit of their clients, families, and communities. <br />
        <br/>
        We recognize that ESG factors, such as climate change, are transforming investment strategies and workforce priorities. To drive sustainable value creation,
        we integrate ESG considerations into our investment process across private equity, credit, and wealth management. By assessing key ESG risks and opportunities 
        within each company and industry, we ensure responsible decision-making that fosters long-term success.
      </p>
    </div>

    {/* Image Section */}
    <div className="relative ">
      {/* First Image with Slant Effect */}
      <div className="bg-[var(--text-black)] h-[30rem] absolute opacity-30 top-0"></div>
      <img
        src={IMG}
        alt="Finance & Investment"
        className="w-full h-[30rem] object-cover "
      />
      <div className="absolute flex left-0 top-12 bg-[var(--secondary-color)] px-4 py-2 items-center transition duration-700 ease-in-out ">
        <GiLaurelsTrophy size={40} color="var(--primary-color)"/>
        <div>
        <h2 className="text-xl font-bold">Responsible</h2>
          <h2 className="text-xl font-bold">
          Investment</h2>
        </div>
         
        </div>
    </div>
    </div>
  </section>
  )
}

export default BodyInvest