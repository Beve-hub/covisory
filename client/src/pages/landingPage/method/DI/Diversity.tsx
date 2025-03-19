import IMG from "../../../../assets/di13a.jpg";
import IMG2 from "../../../../assets/13b.jpg";


const Diversity = () => {
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
          <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
          Investing in inclusion and diversity
          </h2>
          <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
          More than the environment is involved in sustainable investing. On our sustainable investing platform, we have also been concentrating on I&D as an investment option. We are developing solutions to make it easier for investors to learn about businesses that are pioneers in promoting inclusion and diversity principles throughout their operations as a result of the growing interest we are receiving from our clients. </p>
        </div>

        
      </div>

    </section>
  )
}

export default Diversity