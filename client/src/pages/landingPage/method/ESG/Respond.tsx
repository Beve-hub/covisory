import IMG1 from "../../../../assets/es12a.jpg";
import IMG2 from "../../../../assets/es12b.jpg";


const Respond = () => {
  return (
    <section className="bg-[var(--text-white)] py-[10rem] px-4 text-center md:text-left">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative flex flex-col items-center md:items-start">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src={IMG2}
              alt="Partner"
              className="w-[20rem] h-[20rem] sm:h-[25rem] rounded-lg shadow-lg object-cover opacity-80 absolute -top-5 -left-5 hidden sm:block transition-transform duration-300 group-hover:scale-105"
            />
            <div className="relative sm:top-0 sm:left-0 lg:top-20 lg:left-[10rem] ">
              <img
                src={IMG1}
                alt="About"
                className="w-[20rem] h-[20rem] object-cover sm:h-[25rem] rounded-lg relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

         {/* Text Content */}
         <div className="p-6">
          <p className="relative max-w-[10rem] overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
            Responsibility:
            
            </span>
          </p>
          <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
          From Sourcing to Exit
          </h2>
          <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
          In order to reduce stakeholder risks and position our portfolio companies for sustainable growth and success, we integrate ESG analysis into our private equity investment process. RCG subject matter experts thoroughly examine the company's technology, cybersecurity, and data privacy practices prior to every deal and add-on acquisition. In order to evaluate potential ESG risks and opportunities, we also work with law firms and consulting firms. The investment committee is informed of all important findings.

Covisory Holdings keeps track of ESG performance and development over the course of each private equity investment after a deal has closed. Through ongoing discussions and written check-ins with Covisory Holdings portfolio company management and leadership, as well as board oversight during quarterly meetings, we make sure ESG measures are maintained.</p>
        </div>
      </div>

    </section>
  )
}

export default Respond