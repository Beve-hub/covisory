import IMG from "../../../../assets/sta2.jpg";


const StaTeam = () => {
  return (
    <section className="w-screen bg-[var(--secondary-color)] py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

     {/* Text Content */}
     <div className="p-6">
      <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--text-white)]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
        Team-Based Methodology
        </span>
       
      </p>
      <h2 className="text-[var(--text-white)] font-bold text-3xl py-4">
      Collaborative Approach to Responsible Investment
      </h2>
      <p className="text-[var(--text-white)] mt-4 text-sm leading-relaxed">
      We employ a team-based approach when implementing responsible investment
      for our investment strategies, keeping with our team-based approach to all investment processes. 
      Members of our Strategy Investment Research, Investment Analytics & Data, Investment Stewardship,
      and Portfolio Management teams put in a lot of work to conduct responsible investments. 
      Our Head of Responsible Investment works with these various groups to organize ESG activities. 
      With a dotted line to one of our Co-CEOs, the Head of Responsible Investment reports to our Global Head of Portfolio Management.
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

export default StaTeam