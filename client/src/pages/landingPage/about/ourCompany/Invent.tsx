import IMG from "../../../../assets/sm8.jpg";

const Invent = () => {
  return (
    <section 
        className="relative w-screen h-[30rem] grid items-center pt-16 pb-6 px-6 text-left md:text-left"
        style={{ backgroundImage: `url(${IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        
        <div className="absolute inset-0 bg-[var(--secondary-color)] opacity-40"></div>
  
        {/* Content in front of the image */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-6  items-center text-white">
          <div className="">
            <p className="text-xl font-bold">A TRUE GLOBAL REACH</p>
            <p className="pb-8">With a commitment to strategic growth, we manage diverse investment funds, leveraging expertise and global insights to drive innovation and long-term value.</p>
            <h2 className="relative overflow-hidden text-balance text-3xl px-4 border-l-4 border-[var(--button-color)] transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--primary-color)] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[var(--button-color)] before:transition-all before:duration-500 hover:before:w-full">
  <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-black)]">
    Empowering High-Potential Companies with Expertise and Global Insight
  </span>
</h2>


          </div>
          <div >
            <p>Covisory Holdings manages a range of fund strategies for a diverse group of endowments, foundations, pension plans, 
                financial institutions, family offices, and sovereign entities, investing across the risk/return spectrum.
                <br/>
            Our strength lies in partnering with high-potential companies by offering a unique combination of operational expertise,
             specialized industry knowledge, and a global perspective. By employing a sector- and sub-sector-based approach, 
             we gain deep insights into emerging trends, identify new investment opportunities, and effectively manage potential risks.
              This approach not only strengthens our partnerships with management teams but also fosters innovation and sustainable growth,
               reinforcing Covisory Holdings as a trusted and strategic investment partner.
            </p>
          </div>
        </div>
      </section>
  )
}

export default Invent