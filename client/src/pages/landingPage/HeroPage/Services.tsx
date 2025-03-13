import IMG1 from "../../../assets/5a.jpg";
import IMG2 from "../../../assets/5b.jpg";
import IMG3 from "../../../assets/5c.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const images = [
  {
    src: IMG1,
    text: "We are firmly committed to diversity. We are committed to fostering and work to build an inclusive workplace... ",
    bug: "Diversity & Inclusion",
    fix: "D & I",
  },
  {
    src: IMG2,
    text: "Our corporate strategy policy is formed to ensure sustainable investments through beneficial engagement...  ",
    bug: "Environmental Social Governance",
    fix: "ESG",
  },
  {
    src: IMG3,
    text: "A Financial Plan That Is Specialized For Your Situation At Covisory Holdings, the process of financial planning...",
    bug: "Financial Forecast",
    fix: "Financial",
  },
];


const Services = () => {
  return (
    <section className="bg-[var(--bg-white)] py-16 px-4 text-center md:text-left">
       <div className="max-w-5xl mx-auto grid items-center">
          <div className="grid justify-center items-center">
          <p className="text-[var(--primary-color)] font-semibold text-lg text-center">Our Services</p>
          <h2 className="text-[var(--text-black)] py-2 flex font-bold text-2xl md:text-xl sm:text-lg text-balance text-center items-center">Our Business group and Structured Finance statisticians power our investment strategies' generation of ideas and risk analysis.</h2>
         </div>

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center p-5">
        {images.map((item, index) => (
        <div key={index} className="relative bg-white shadow-lg rounded-xl overflow-hidden p-5">
          {/* Image with hover animation */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={item.src}
              alt="card-img"
              className="w-full h-56 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
          {/* Text content */}
          <div className="bg-white p-4">
            <p className="font-semibold text-xl text-[var(--primary-color)]">{item.fix}</p>
            <h2 className="font-bold text-2xl text-[var(--text-black)] mt-1">{item.bug}</h2>
            <p className="text-[var(--gray-color)] mt-2 text-sm">{item.text}</p>
          </div>
          {/* Arrow icon */}
          <div className="absolute right-5 bottom-5 text-xl text-gray-600">
            <p className="bg-[var(--secondary-color)] text-[var(--text-white)] p-4 rounded-full"><FaArrowRightLong /></p>
          </div>
        </div>
      ))}
    </div>
        </div>
    </section>
  )
}

export default Services