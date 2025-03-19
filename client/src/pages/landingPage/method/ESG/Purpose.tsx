import IMG1 from "../../../../assets/9a.jpg";


const Purpose = () => {
  return (
    <section className="bg-[var(--secondary-color)] py-[10rem] px-4 text-center md:text-left">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

       {/* Text Content */}
       <div className="p-6">
        <p className="relative  overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--text-white)]
           px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
           before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
          <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
          Serving a Broader Purpose
          </span>
        </p>
        <h2 className="text-[var(--text-white)] font-bold text-3xl py-4">
        
        Commitment to ESG and Sustainable Growth
        </h2>
        <p className="text-[var(--text-white)] mt-4 text-sm leading-relaxed">
        Our unrivaled expertise in the enterprise software market allows us to consistently fulfill our commitments to investors who have entrusted us with their futures by prioritizing ESG practices and policies.
        <br/>
        <br/>
        Our ESG principles are ingrained in every aspect of our operations and aid us in making sure that our marketing strategy will endure for a very long time.</p>
      </div>


       {/* Image Section */}
       <div className="">
       <img
            src={IMG1}
            alt="Partner"
            className="w-full h-[20rem] sm:h-[25rem] rounded-lg shadow-lg object-cover opacity-80 sm:block transition-transform duration-300 group-hover:scale-105"
          />
      </div>
    </div>

  </section>
  )
}

export default Purpose