
const TopES = () => {
  return (
    <section 
    className="relative w-screen h-[25rem] pt-[10rem] bg-gradient-to-r from-[var(--layer-grade)] Via-[var(--primary-color)] to-[var(--layer-color)]  grid items-center pt-16 pb-6 px-6 text-left md:text-left"
  
  >
    
    <div className="absolute inset-0 bg-black opacity-30"></div>

    {/* Content in front of the image */}
    <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-6 items-start text-white">
      <div className="col-span-4">
        <h2 className="text-5xl font-bold mb-4 text-start ">E S G</h2>
      </div>
    </div>
  </section>
  )
}

export default TopES