import { HiCheckBadge } from "react-icons/hi2";
import IMG1 from "../../../assets/5a.jpg";

const Choose = () => {
  return (
    <section className="bg-[var(--text-white)] py-16 px-4 text-center md:text-left">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <img 
            src={IMG1} 
            alt="Service Image" 
            className="h-[35rem] w-full object-cover mx-auto md:mx-0"
          />
        </div>
        <div>
          <div>
            <p className="text-[var(--primary-color)] font-semibold text-md">Why Choose Covisory Holdings?</p>
            <h2 className="text-[var(--text-black)] py-2 font-bold text-3xl md:text-4xl sm:text-2xl text-balance">
            Want to Be a Part of Our Team?
            </h2>
          </div>
          <p className="text-[var(--gray-color)]">
          At Covisory Holdings, we manage a diverse portfolio of highly recognized institutions, including endowments,
           foundations, public and private pension funds, financial firms, family offices, and sovereign entities.
            Our investment approach spans the entire risk/return spectrum, ensuring tailored solutions for each client.
            <br/>
            <br/>
            We believe that successful investing is built on in-depth research, not speculation.
             Our philosophy centers on applying value-driven investment strategies, rigorous bottom-up analysis,
              sophisticated legal and financial frameworks, and proactive asset management to every opportunity we pursue.
          </p>

          <div>
            <p className="text-[var(--text-black)] text-lg">
            Our Key Focus Areas:
            </p>
          <ul className="text-[var(--text-black)] grid md:grid-cols-2 gap-2 mt-4">
            <li className="text-[var(--gray-color)] flex items-center gap-2">
              <HiCheckBadge /> Technology
            </li>
            <li className="text-[var(--gray-color)] flex items-center gap-2">
              <HiCheckBadge /> Clean Energy
            </li>
            <li className="text-[var(--gray-color)] flex items-center gap-2">
              <HiCheckBadge /> Insurance
            </li>
            <li className="text-[var(--gray-color)] flex items-center gap-2">
              <HiCheckBadge /> Assets
            </li>
          </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Choose;
