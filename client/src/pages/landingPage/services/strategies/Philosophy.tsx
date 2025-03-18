import IMG from "../../../../assets/sta3a.jpg";
import IMG2 from "../../../../assets/sta3c.jpg";
import { GiLaurelsTrophy } from "react-icons/gi";

const Philosophy = () => {
  return (
    <section className="w-screen bg-[var(--text-white)] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
              <h2 className="text-xl font-bold">We're ready to
              </h2>
              <h2 className="text-xl font-bold">
              assist you</h2>
            </div>
          </div>
          </div>
          
        </div>
       
        {/* Text Content */}
        <div className="p-6">
          <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
            Investment Philosophy and Principles
            </span>
          </p>
          <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
          Integrating ESG Factors for Risk Management and Returns
          </h2>
          <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
          Our investment strategy is grounded in the idea that prices on liquid capital markets accurately reflect all information that is available to the general public. Information on a portfolio company's strategy, financial and nonfinancial performance, risk, capital structure, social and environmental impact, and corporate governance are just a few examples of what is covered. As a result, we think that the prices of securities reflect the overall risk and return expectations of investors and that prices are driven toward fair value by competition among market participants.
          <br/>
            <br/>
            Despite the fact that we think market prices do reflect a company's ESG policies, 
            we also think that ESG standards can be used to reduce risk and/or boost investment returns for our clients. 
            Particularly, we think that:
            ESG factors should be incorporated into portfolios to manage risks. Additionally, 
            investment managers should carefully integrate ESG where clients want investment solutions that also aim to achieve 
            quantifiable ESG outcomes so that the loss of diversification brought on by ESG considerations does not significantly 
            affect expected returns.
            </p>
        </div>
      </div>
    </section>
  )
}

export default Philosophy