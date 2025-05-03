import { HiCheckBadge } from "react-icons/hi2";
import IMG1 from "../../../assets/team.jpg";

const Choose = () => {
  return (
    <section className="bg-[var(--text-white)] py-16 px-6 text-center md:text-left">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center md:justify-start">
          <img 
            src={IMG1} 
            alt="Service Image" 
            className="h-[30rem] w-full max-w-md object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Text Content */}
        <div>
          <p className="text-[var(--primary-color)] font-semibold text-md">
            Why Choose Glow Holdings?
          </p>
          <h2 className="text-[var(--text-black)] py-3 font-bold text-2xl sm:text-xl md:text-3xl leading-tight">
            Want to Be a Part of Our Team?
          </h2>
          <p className="text-[var(--gray-color)] text-md leading-relaxed">
            At Glow Holdings, we manage a diverse portfolio of highly recognized institutions, including endowments,
            foundations, public and private pension funds, financial firms, family offices, and sovereign entities.
            Our investment approach spans the entire risk/return spectrum, ensuring tailored solutions for each client.
         <br />
            We believe that successful investing is built on in-depth research, not speculation. Our philosophy centers on 
            applying value-driven investment strategies, rigorous bottom-up analysis, sophisticated legal and financial frameworks, 
            and proactive asset management to every opportunity we pursue.
          </p>

          {/* Key Focus Areas */}
          <div className="mt-6">
            <p className="text-[var(--text-black)] text-xl font-semibold">
              Our Key Focus Areas:
            </p>
            <ul className="text-[var(--text-black)] grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {['Technology', 'Clean Energy', 'Insurance', 'Assets'].map((item, index) => (
                <li key={index} className="text-[var(--gray-color)] flex items-center gap-2 text-md">
                  <HiCheckBadge color="text-[var(--primary-color)]" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
