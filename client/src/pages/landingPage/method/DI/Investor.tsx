import IMG from "../../../../assets/di2.jpg";

const Investor = () => {
  return (
    <section className="w-screen bg-[var(--light-gray)] py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
     
      {/* Image Section */}
      <div className="relative">
        <div className="bg-[var(--text-black)] h-[30rem] absolute opacity-30 top-0"></div>
        <img
          src={IMG}
          alt="Finance & Investment"
          className="w-full h-[20rem] object-cover"
        />
        
        
      </div>


      {/* Text Content */}
      <div className="p-6">
        
        <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
        institutional investors
        </h2>
        <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
        The institutional investors listed below recognize the existence of structural racism and the harm it causes to Black, Indigenous, and Racialized communities around the globe.</p>
      </div>

    </div>
  </section>
  )
}

export default Investor