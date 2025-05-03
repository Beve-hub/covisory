import IMG from "../../../../assets/es2a.jpg";
import IMG2 from "../../../../assets/es1b.jpg";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

const Holding = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-screen bg-[var(--light-gray)] py-20">
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
          <p className="relative overflow-hidden max-w-[20rem] border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
            Sustainability Focus
            </span>
          </p>
          <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
          The Glow Holdings ESG Sustainability
          </h2>
          <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
          Sustainability has been ingrained throughout the investment process at Glow Holdings for well over a decade, 
          and the company has an unwavering commitment to responsible investment. This commitment was inspired by the conviction 
          that a responsible investment strategy can produce net benefits for society and the environment in addition to maximizing 
          financial returns for investors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="relative">
              <img
                src={IMG2}
                alt="Finance & Investment"
                className="w-full h-[10rem] object-cover"
              />
              <button
                onClick={() => setIsOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-[var(--transparent-white)] p-2 rounded-full"
              >
                <div className="border-2 border-[var(--secondary-color)] p-4 rounded-full flex items-center justify-center shadow-lg">
                  <FaPlay size={24} color="var(--secondary-color)" />
                </div>
              </button>
            </div>

            <ul className="gap-4">
                <li className="flex gap-2 text-[var(--text-black)] items-center"><BsCheckCircleFill /> Environmental Highlights</li>
                <li className="flex gap-2 text-[var(--text-black)] items-center"><BsCheckCircleFill /> Social Highlights </li>
                <li className="flex gap-2 text-[var(--text-black)] items-center"><BsCheckCircleFill /> Governance Highlights</li>
            </ul>
          </div>
        </div>

        {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[var(--light-black)] bg-opacity-15 z-50 px-4">
          <div className="relative w-full max-w-lg bg-white p-4 rounded-lg shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-red-500"
            >
              &times;
            </button>
            <div className="relative w-full h-64 sm:h-80 md:h-[30rem]">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/Xr0-Wyqy-F0"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  )
}

export default Holding