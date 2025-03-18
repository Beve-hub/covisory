import IMG from "../../../../assets/sta4.jpg";

const Process = () => {
  return (
    <section className="w-screen bg-[var(--secondary-color)] py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

     {/* Text Content */}
     <div className="p-6">
      <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--text-white)]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
        ESG Investment Processes and Strategies
        </span>
       
      </p>
      <h2 className="text-[var(--text-white)] font-bold text-3xl py-4">
      Integrating ESG Factors into Portfolio Construction
      </h2>
      <p className="text-[var(--text-white)] mt-4 text-sm leading-relaxed">
      ESG investment processes and strategies
By incorporating ESG factors broadly into all of our investment strategies and by providing specialized equity and fixed income strategies that aim to achieve particular ESG-related outcomes, we reflect the aforementioned ESG beliefs.
ESG factors are incorporated into our investment processes for risk management purposes. We begin by creating our portfolios using the following principles of investing:
1) Targeted return drivers backed by solid research;<br/>
2) Diversify among issuers, industries, and nations as appropriate;<br/>
3) Daily price information should be taken into account, and portfolios should be systematically implemented by carefully balancing expected returns, costs, and risks.
      </p>
    </div>

    <img
         src={IMG}
         alt="About"
         className="w-[45rem] object-cover sm:h-[25rem] rounded-lg relative z-10 transition-transform duration-300 group-hover:scale-105 "
    />
   
    </div>
  </section>
  )
}

export default Process