import IMG from "../../../../assets/di6a.jpg";
import IMG2 from "../../../../assets/di6b (1).jpg";


const Under = () => {
  return (
    <section className="w-screen bg-[var(--light-gray)] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <div className="p-6">
          <p className="relative max-w-[15rem] overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
           Diversity and Equity
            </span>
          </p>
          <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
          A - undersigned institutional investors
          </h2>
          <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
          We, the undersigned institutional investors, acknowledge the existence of systemic racism and the effects it has on Black, Indigenous, and People of Color communities around the world.
<br />
<br />
We also acknowledge that there are inequities and forms of discrimination based on things like socioeconomic status, gender, sexual orientation, age, disability, and even age and sexual orientation. It is up to us all to make sure that the enduring injustices in our economy and society are eradicated.
<br />
<br />
By making conscious efforts to promote diversity and inclusion across our portfolios and within our organizations, institutional investors can help address these inequities.</p>
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

export default Under