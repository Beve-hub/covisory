import IMG from "../../../../assets/trade2.jpg";


const Smart = () => {
  return (
    <section className="w-screen bg-[var(--secondary-color)] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
           {/* Image Section */}
           <div className="relative">
          <div className="bg-[var(--text-black)] h-[30rem] absolute opacity-30 top-0"></div>
          <img
            src={IMG}
            alt="Finance & Investment"
            className="w-full h-[20rem] object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="p-6">
          <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--text-white)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">  
             smart and adaptive
            </span>
          </p>
          <h2 className="text-[var(--text-white)] font-bold text-3xl py-4">
          Maximizing Opportunities in Cryptocurrency Trading
          </h2>
          <p className="text-[var(--text-white)] mt-4 text-sm leading-relaxed">
          Being adaptive and smart means taking advantage of the numerous values present in the unregulated cryptocurrency market by simultaneously purchasing and selling currencies.
            <br/>
            The Cryptocurrency CFD Trader automation is one such technology that accomplishes this task effectively.
You can count on having a speedy, secure, and safe trading history with this system.
          </p>
        </div>

     
      </div>
    </section>
  );
};

export default Smart;
