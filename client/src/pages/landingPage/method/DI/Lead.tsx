import IMG from "../../../../assets/di4.jpg";

const Lead = () => {
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
          <p className="relative max-w-[10rem] overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
            Influencers
            </span>
          </p>
          <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
          Take the Lead
          </h2>
          <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
          As a result, the investors signing this letter urge publicly traded companies 
          to take the lead in international initiatives to address systemic inequities by 
          advancing diversity and inclusion initiatives and enhancing transparency and accountability. 
          We also encourage our own institutions to promote diversity and the inclusion of underrepresented 
          people in our groups. </p>
        </div>

      </div>
    </section>
  )
}

export default Lead