import IMG from "../../../../assets/di7a.jpg";

const Companies = () => {
  return (
    <section className="w-screen bg-[var(--secondary-color)] py-20">
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
          <p className="relative max-w-[25rem] overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--text-white)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
            Diversity Drives Business Success
            </span>
          </p>
          <h2 className="text-[var(--text-white)] font-bold text-3xl py-4">
          Why invest in companies that focus on inclusion and diversity?
          </h2>
          <p className="text-[var(--text-white)] mt-4 text-sm leading-relaxed">
          We think businesses cannot fully comprehend the forces influencing their industry,
          the global economy, and the world if they do not take inclusion and diversity (I&D) 
          issues seriously. A diverse and well-connected group of professionals has the best chance of responding to such challenges. The most difficult challenges of today come from a diverse, interconnected world. Therefore, considering inclusion and diversity as an investment is important rather than just focusing on it from a moral perspective.</p>
        </div>

      </div>
    </section>
  )
}

export default Companies