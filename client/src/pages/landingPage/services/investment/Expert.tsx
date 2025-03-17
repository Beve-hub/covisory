
const Expert = () => {
  return (
    <section className="w-screen bg-[var(--light-gray)] py-20">
    <div className="max-w-6xl mx-auto">
 {/* Text Content */}
 <div className="p-6">
      <p className="w-[10rem] relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
    
Our Expertise
        </span>
       
      </p>
      <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
      Why Invest With Covisory Holdings?
      </h2>
      <p className="text-[var(--text-black)] mt-4 text-sm text-balance leading-relaxed">
      Our investment approach spans the entire risk/return spectrum, ensuring tailored solutions for each client.

We believe that successful investing is built on in-depth research, not speculation. 
       </p>
    </div>

    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

    
    </div>
    
    </div>
  </section>
  )
}

export default Expert