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
    <section className="bg-[var(--bg-white)] py-24 px-4 text-center md:text-left">
      <div className="max-w-6xl mx-auto">
        <div className="grid justify-center items-center text-center">
          <p className="text-[var(--primary-color)] font-semibold text-lg">Our Services</p>
          <h2 className="text-[var(--text-black)] py-2 font-bold text-3xl md:text-2xl sm:text-xl leading-snug">
            Our Business group and Structured Finance statisticians power our investment strategies' generation of ideas and risk analysis.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4 sm:px-0">
          {images.map((item, index) => (
            <div key={index} className="relative bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
              {/* Image with hover effect */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={item.src}
                  alt="card-img"
                  className="w-full h-60 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              {/* Text content */}
              <div className="p-6">
                <p className="font-semibold text-lg text-[var(--primary-color)]">{item.fix}</p>
                <h2 className="font-bold text-xl text-[var(--text-black)] mt-1">{item.bug}</h2>
                <p className="text-[var(--gray-color)] mt-2 text-sm leading-relaxed">{item.text}</p>
              </div>
              {/* Arrow icon */}
              <div className="absolute right-4 bottom-4 text-xl text-gray-600">
                <p className="bg-[var(--secondary-color)] text-[var(--text-white)] p-3 rounded-full">
                  <FaArrowRightLong />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
