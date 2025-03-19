import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import IMG1 from "../../../assets/partner.jpg";
import IMG2 from "../../../assets/about1.jpg";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[var(--text-white)] py-[10rem] px-4 text-center md:text-left">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative flex flex-col items-center md:items-start">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src={IMG1}
              alt="Partner"
              className="w-[20rem] h-[20rem] sm:h-[25rem] rounded-lg shadow-lg object-cover opacity-80 absolute -top-5 -left-5 hidden sm:block transition-transform duration-300 group-hover:scale-105"
            />
            <div className="relative sm:top-0 sm:left-0 lg:top-20 lg:left-[10rem] ">
              <img
                src={IMG2}
                alt="About"
                className="w-[20rem] h-[20rem] object-cover sm:h-[25rem] rounded-lg relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
              <button
                onClick={() => setIsOpen(true)}
                className="absolute top-[12rem] left-[10rem] transform -translate-x-1/2 -translate-y-1/2 z-20 bg-[var(--transparent-white)] p-2 rounded-full"
              >
                <div className="border-2 border-[var(--secondary-color)] p-4 rounded-full flex items-center justify-center shadow-lg ">
                  <FaPlay size={24} color="var(--secondary-color)" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* About Us Content */}
        <div className="px-4 text-center md:text-left">
          <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">Who we are</p>
          <h2 className="text-[var(--text-black)] text-3xl sm:text-4xl md:text-5xl font-bold">Welcome to Covisory Holdings</h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            We help our clients achieve their most ambitious goals by putting the strategies of the most prosperous people, families, and institutions in the world into action through our knowledge and dedication.
            <br />
            Our durability, which spans years and generations, stems from the awareness that we are more than just a financial organization. We are engaged members of our communities, leaders in commerce and philanthropy on a worldwide scale, and conscientious designers of cutting-edge programs for employee support and benefits.
          </p>
          <button className="mt-4 bg-[var(--secondary-color)] p-3 rounded-lg text-[var(--text-white)] font-semibold cursor-pointer w-40 text-center">Learn More</button>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 px-4">
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
    </section>
  );
};

export default AboutUs;
