import IMG from "../../../../assets/di3a.jpg";
import IMG2 from "../../../../assets/3b.jpg";

const Promote = () => {
  return (
    <section className="w-screen bg-[var(--secondary-color)] py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Text Content */}
      <div className="p-6">
        <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--text-white)]
           px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
           before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
          <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
          Team Work
          </span>
        </p>
        <h2 className="text-[var(--text-white)] font-bold text-3xl py-4">
        Promoting diversity and inclusion
        </h2>
        <p className="text-[var(--text-white)] mt-4 text-sm leading-relaxed">
        Promoting multiculturalism and inclusion is not only ethically correct, 
        but it is also advantageous to society and business. Elevated concentrations of diversity 
        and inclusion are associated with better corporate profitability, growth, and employee engagement, 
        according to a growing body of research. The inclusion of diversity and inclusion in business decisions 
        opens up opportunities for underrepresented groups, which also enhances reputation, reinforces governance, and lowers risk.
        </p>
      </div>

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
     
    </div>

  </section>
  )
}

export default Promote