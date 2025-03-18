import IMG from "../../../../assets/sta6.jpg";

const Contribute = () => {
  return (
    <section className="w-screen bg-[var(--light-gray)] py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

     {/* Text Content */}
     <div className="p-6">
      <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--text-black)]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
        Contribution to the Industry
        </span>
       
      </p>
      <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
         Advocating for Market Transparency and Investor Interests
      </h2>
      <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
      Along with the investments we make on our clients' behalf, we also work to enhance the operation of the investment sector.
Among other things, these efforts include collaborating with regulators to enhance market mechanisms, promoting transparency, as well as defending our clients' interests all throughout the investment process. In an effort to contribute to the improvement of market mechanisms, we have frequently provided regulators with input.
<br/>
<br/>
For instance, we vehemently opposed the proposed practice when the U.S. Securities and Exchange Commission ("Commission") requested feedback on a pilot program for wider bid-ask spreads for small-cap issuers.
The Commission ceased the proposed changes after the pilot program because it realized that smaller bid-ask spreads ultimately benefited investors.
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

export default Contribute