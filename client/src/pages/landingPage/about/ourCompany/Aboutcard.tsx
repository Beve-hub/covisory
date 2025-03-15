import { FaUncharted } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaPeopleRoof } from "react-icons/fa6";

const AboutCard = () => {
  return (
    <section className="bg-[var(--light-gray)] py-20 text-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="relative shadow-lg overflow-hidden rounded-lg bg-[var(--secondary-color)] text-[var(--text-white)] group transition-all duration-300">
          <div className="absolute inset-0 bg-[var(--text-white)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          <div className="relative p-6 transition-all duration-300 group-hover:text-[var(--secondary-color)]">
            <p className="text-center flex justify-start">
              <HiMiniUserGroup size={40} />
            </p>
            <h2 className="font-bold text-xl text-start py-4">Environment</h2>
            <p className="text-lg text-start">
              The portfolio of Our Buyout Funds can be described as 'asset light,' and for many businesses, electricity use is the most...
            </p>
          </div>
        </div>

        {/* Card 2 - Fixed */}
        <div className="relative shadow-lg overflow-hidden rounded-lg bg-[var(--text-white)] text-[var(--secondary-color)] group transition-all duration-300">
          <div className="absolute inset-0 bg-[var(--secondary-color)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          <div className="relative p-6 transition-all duration-300 group-hover:text-[var(--text-white)]">
            <p className="text-center flex justify-start text-[var(--secondary-color)] group-hover:text-[var(--text-white)]">
              <FaPeopleRoof size={40} />
            </p>
            <h2 className="font-bold text-xl text-start py-4">Sustainability</h2>
            <p className="text-lg text-start">
              Our approach to investing prioritizes environmental impact, ensuring that our business strategies align with sustainability goals...
            </p>
          </div>
        </div>

        {/* Card 3 - Fixed */}
        <div className="relative shadow-lg overflow-hidden rounded-lg bg-[var(--text-white)] text-[var(--secondary-color)] group transition-all duration-300">
          <div className="absolute inset-0 bg-[var(--secondary-color)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          <div className="relative p-6 transition-all duration-300 group-hover:text-[var(--text-white)]">
            <p className="text-center flex justify-start text-[var(--secondary-color)] group-hover:text-[var(--text-white)]">
              <FaUncharted size={40} />
            </p>
            <h2 className="font-bold text-xl text-start py-4">Innovation</h2>
            <p className="text-lg text-start">
              We leverage cutting-edge technology and sustainable solutions to drive efficiency and minimize environmental impact.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCard;
