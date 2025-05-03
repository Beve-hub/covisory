import IMG from "../../../../assets/per1.jpg";
const Discovery = () => {
  return (
    <section className="w-screen bg-[var(--text-white)] py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Text Content */}
    <div className="p-6">
      <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)] w-[20rem]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
        Financial Perspectives
        </span>
       
      </p>
      <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
      Glow Holdings Financial Perspective
      </h2>
      <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
      Your asset manager will first have to determine your circumstances and needs, whether you contact us directly or through a qualified adviser.
      A crucial aspect of this procedure is having direct communication with the person who will be in charge of handling your financial affairs.
      He or she needs to be aware of your general degree of wealth, way of life, time frame, tax situation, and any liabilities you could have. 
      You might want to transfer a current portfolio from another investing firm or you might be a new investor. Consolidating your investments,
       including ISAs, under a single investment strategy may also be a good idea at this time.
        <br/>
       We will recommend an investment strategy that takes into account your specific circumstances and goals
      once we have gained a thorough understanding of your situation and your goals through our investment process. 
      If you accept the plan, we'll create your portfolio right away.
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
    </div>
    </div>
  </section>
  )
}

export default Discovery