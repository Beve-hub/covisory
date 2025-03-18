import IMG from "../../../../assets/trade4a.jpg";
import IMG2 from "../../../../assets/trade4b.jpg";


const Action = () => {
  return (
    <section className="w-screen bg-[var(--light-gray)] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
       
        {/* Image Section */}
        <div className="relative flex flex-col items-center md:items-start">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src={IMG2}
              alt="Partner"
              className="w-[10rem] h-[10rem] sm:h-[10rem] rounded-lg shadow-lg object-cover opacity-80 absolute -top-5 -left-5 hidden sm:block transition-transform duration-300 group-hover:scale-105"
            />
            <div className="relative sm:top-0 sm:left-0 lg:top-4 lg:left-[5rem] ">
              <img
                src={IMG}
                alt="About"
                className="w-[40rem] object-cover sm:h-[25rem] rounded-lg relative z-10 transition-transform duration-300 group-hover:scale-105 "
              />
             
            </div>
          </div>
        </div>
       
        {/* Text Content */}
        <div className="p-6">
          <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
            How to grow business
            </span>
          </p>
          <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
          Multiples actions, Same time
          </h2>
          <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
          Currency exchange pairs can be tracked simultaneously by trading robots.
          The visual appearance of being riveted to your screen while tracking your currencies is eliminated. 
          You have the ability to easily track multiple currencies at once.
          <br/>
            The ability to hold and manage a multi-account trading fund has now become possible thanks to trading robots.
            <br/>
            Trading obstacles brought on by constraints on time, speed, diligence, and consistency of trading plans can now be overcome thanks to automated trading.
            <br/>
            Trading robots don't experience emotions that could affect how trades are executed. As a result, interest in automated trading has increased.
          </p>
        </div>

        
      </div>

    </section>
  )
}

export default Action