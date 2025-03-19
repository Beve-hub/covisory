import IMG from "../../../../assets/es5a.jpg";



const Integration = () => {
  return (
    <section className="w-screen bg-[var(--text-white)] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
       
        {/* Image Section */}
        <div className="relative">
          <div className="bg-[var(--text-black)] h-[30rem] absolute opacity-30 top-0"></div>
          <img
            src={IMG}
            alt="Finance & Investment"
            className="w-full h-[30rem] object-cover"
          />
          
          
        </div>


        {/* Text Content */}
        <div className="p-6">
          <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
            ESG Integration & Risk Management
            </span>
          </p>
          <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
          incorporates ESG into investment processes for risk management
          </h2>
          <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
          ESG factors are incorporated into our investment processes for risk management purposes. Using the following investment principles—target drivers of return supported by solid research—we first design our portfolios. When appropriate, diversify among issuers, industries, and nations; take into account daily price information; and methodically implement portfolios by carefully balancing expected returns, expenses, and risks.
<br />
<br />
Diversification is used in the approach described above to lower idiosyncratic risks, including risks related to ESG, but we also add a layer of ESG-specific risk management. For instance, because privately held businesses with significant strategic shareholders may not adequately represent the interests of all shareholders, we may choose to exclude them from our universe of eligible securities. We may also decide not to buy businesses where, based on available information, we think there is a higher risk of fraud or other actions that could render the financial statements of the business unreliable. Additionally, we monitor the news each day to find portfolio companies that are embroiled in disputes that could have a big effect on their bottom line, such as those involving social or environmental issues.
  </p>
        </div>

      </div>
    </section>
  )
}

export default Integration