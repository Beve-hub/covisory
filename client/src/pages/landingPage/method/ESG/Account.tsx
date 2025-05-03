import IMG1 from "../../../../assets/es12c.jpg";

const Account = () => {
  return (
    <section className="bg-[var(--light-gray)] py-[10rem] px-4 text-center md:text-left">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

 {/* Image Section */}
 <div className="relative flex flex-col items-center md:items-start">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src={IMG1}
              alt="Partner"
              className="w-full h-[30rem] sm:h-[25rem] rounded-lg shadow-lg object-cover opacity-80 sm:block transition-transform duration-300 group-hover:scale-105"
            />
           
          </div>
        </div>

         {/* Text Content */}
         <div className="p-6">
          <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
            Broad Accountability
            
            </span>
          </p>
          <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
          accountability throughout the firm
          </h2>
          <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
          At Glow Holdings, we foster ESG understanding and accountability throughout the firm. Our investment professionals are responsible for managing and instilling the guiding principles of our ESG policy across our portfolio companies. In addition, Glow Holdings Consulting Group (RCG) is actively involved in addressing potential ESG risks during the private equity investment process and within the Glow Holdings firm. Our Compliance team provides oversight and ensures that employees at Glow Holdings adhere to our ESG policy.
          </p>
        </div>
  
      </div>

    </section>
  )
}

export default Account