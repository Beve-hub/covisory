import IMG from "../../../../assets/3a.jpg";


const BodyPers = () => {
  return (
    <section className="w-screen bg-gray py-20">
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
    </div>

    {/* Text Content */}
    <div className="p-6">
      <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)] w-[20rem]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
        Managing Your Assets
        </span>
       
      </p>
      <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
      Ensuring a Balanced and Adaptive Investment Strategy
      </h2>
      <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
      To ensure that your asset allocation remains suitable for the constantly shifting circumstances in the global financial and economic markets,
       we will actively manage it. In the event that your goals or personal situation change, your investment manager will also be in charge of making the necessary adjustments.
      <br/>
      <br/>
      One of the best ways to maintain and grow wealth over the long term is to use a diversified investment strategy, also known as a "balanced portfolio" or "multi-asset portfolio,"
       that combines various assets. This strategy can expose investors to a wide range of investment opportunities and limit losses during difficult market conditions. Usually, 
       the way various assets respond to changes in the underlying economy and financial markets varies.


      </p>
    </div>

   
    </div>
  </section>
  )
}

export default BodyPers