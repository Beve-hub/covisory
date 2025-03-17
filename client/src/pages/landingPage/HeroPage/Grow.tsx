import IMG1 from "../../../assets/partner.jpg";
import IMG2 from "../../../assets/about1.jpg";
import IMG3 from "../../../assets/about1.jpg";

const Grow = () => {
  return (
    <section className="bg-[var(--secondary-color)] py-16 px-4 text-center md:text-left">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
        <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)] w-[20rem]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
        How to grow business
        </span>
       
      </p>
          <h2 className="text-[var(--text-white)] py-4 text-5xl font-bold md:text-4xl">
            We grow your assets and investments
          </h2>
          <p className="text-[var(--text-white)]">
            Our history, going back years, stems from the awareness that we are more than just a financial organization.
            <br />
            We are engaged members of our communities, worldwide business and philanthropic leaders, and mindful designers of innovative financial compensation and support programs.
            <br />
            Our teams attempt to generate value across numerous sectors, industries, and locations by investing in leveraged buyouts, public equity, structured finance, FX trading, venture capital, and real estate.
            <br />
            We feel that our people and the common principles we've promoted from our inception are the foundation of our competitive edge. This has enabled us to make a long-term difference for a wide range of investors, including pension funds, endowments, foundations, and individuals.
          </p>
        </div>

        <div className="flex gap-3 group">
          <img
            src={IMG1}
            alt=""
            className="w-[20rem] h-[30rem] object-cover transition-all duration-300 group-hover:w-[8rem]"
          />
          <img
            src={IMG2}
            alt=""
            className="w-[8rem] h-[30rem] object-cover transition-all duration-300 hover:w-[20rem] group-hover:w-[8rem] hidden sm:block"
          />
          <img
            src={IMG3}
            alt=""
            className="w-[8rem] h-[30rem] object-cover  transition-all duration-300 hover:w-[20rem] group-hover:w-[8rem] hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Grow;
