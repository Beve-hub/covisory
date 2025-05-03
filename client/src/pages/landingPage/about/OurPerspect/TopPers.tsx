import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const TopPers = () => {
  return (
    <section 
        className="relative w-screen h-[25rem] pt-[10rem] bg-gradient-to-r from-[var(--layer-grade)] Via-[var(--primary-color)] to-[var(--layer-color)] grid items-center pt-16 pb-6 px-6 text-left md:text-left"
       
      >
        
        <div className="absolute inset-0 bg-black opacity-30"></div>
  
        {/* Content in front of the image */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-6 items-start text-white">
          <div className="col-span-4">
            <h2 className="text-6xl font-bold mb-4 text-start">About</h2>
            <p className="text-xl flex items-center space-x-4 font-bold">About <span><MdOutlineKeyboardArrowRight color="var(--text-white)" /></span> <span className="text-[var(--text-white)]">Our Perspective</span></p>
          </div>
        </div>
      </section>
  )
}

export default TopPers