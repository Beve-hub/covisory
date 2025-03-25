import IMG from "../../../../assets/bg2.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const TopDI = () => {
  return (
    <section 
    className="relative w-screen h-[25rem] pt-[10rem] grid items-center pt-16 pb-6 px-6 text-left md:text-left"
    style={{ backgroundImage: `url(${IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    
    <div className="absolute inset-0 bg-black opacity-30"></div>

    {/* Content in front of the image */}
    <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-6 items-start text-white">
      <div className="col-span-4">
        <h2 className="text-5xl font-bold mb-4 text-start">Methodology</h2>
        <p className="text-xl flex items-center space-x-4 font-bold">Methodology <span><MdOutlineKeyboardArrowRight color="var(--primary-color)" /></span> <span className="text-[var(--primary-color)]">Diversity & Inclusion</span></p>
      </div>
    </div>
  </section>
  )
}

export default TopDI