import IMG from "../../../../assets/clarity.jpg";


const Clarity = () => {
  return (
    <section className="w-screen bg-[var(--text-white)] py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Text Content */}
    <div className="p-6">
      <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
        Clarity
        </span>
       
      </p>
      <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
      Transparency, Honesty, and Purposeful Change
      </h2>
      <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
      At the heart of responsible investing lies clarity. By openly sharing our strategies and practices,
      we demonstrate our commitment to driving meaningful change. This transparent approach not only highlights
       our dedication to responsible investing but also allows us to candidly address the challenges of developing
        investment services that effectively cater to the diverse needs of our clients.
      </p>
    </div>

       {/* Image Section */}
       <div className="relative ">
      {/* First Image with Slant Effect */}
      <div className="bg-[var(--text-black)] h-[30rem] absolute opacity-30 top-0"></div>
      <img
        src={IMG}
        alt="Finance & Investment"
        className="w-full h-[30rem] object-cover "
      />
    </div>

  
    </div>
  </section>
  )
}

export default Clarity