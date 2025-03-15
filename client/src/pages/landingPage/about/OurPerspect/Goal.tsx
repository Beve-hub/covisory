import IMG from "../../../../assets/04.png";
import IMG1 from "../../../../assets/05.png";
import IMG2 from "../../../../assets/06.png";

const image = [
  {
    icon: IMG,
    title: "Quality Focus",
    desc: "We are methodical in acquiring top-notch assets and companies that we think can offer reliable downside protection throughout market cycles.",
  },
  {
    icon: IMG1,
    title: "Steady Approach",
    desc: "Although we deploy capital over the long haul, we are prepared to act swiftly when the right opportunity presents themselves.",
  },
  {
    icon: IMG2,
    title: "Contrarian Opinion",
    desc: "We acknowledge that creating desirable rates of return frequently necessitates looking for assets, companies, and markets.",
  },
];

const Goal = () => {
  return (
    <section className="w-screen bg-[var(--light-gray)] py-20">
      <div className="max-w-6xl mx-auto grid items-center">
        {/* Text Content */}
        <div className="p-6">
          <p
            className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)] w-[20rem]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full"
          >
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
            Financial Insights
            </span>
          </p>
          <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
          Smart Investment Strategies for Growth
          </h2>
          <p className="text-[var(--text-black)] mt-4 text-sm text-balance leading-relaxed">
          Our investment managers build strong relationships to understand your financial status and goals. With a sector-focused approach, we leverage shared insights to align the right financial solutions with market opportunities.
          </p>
        </div>
        {/* Cards Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center py-6">
          {image.map((item, index) => (
            <div
              key={index}
              className="group shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[var(--primary-color)] rounded-lg flex flex-col items-center text-center"
            >
              <img
                src={item.icon}
                alt=""
                className="w-[3rem] h-[3rem] bg-[var(--light-gray)] rounded-full p-2 mb-4 transition-all duration-300 group-hover:bg-[var(--text-white)]"
              />
              <p className="text-[var(--text-black)] font-bold text-xl transition-all duration-300 group-hover:text-[var(--text-white)]">
                {item.title}
              </p>
              <p className="text-[var(--text-black)] mt-2 line-clamp-3 transition-all duration-300 group-hover:text-[var(--text-white)]">
        {item.desc.length > 150 ? item.desc.substring(0, 150) + "..." : item.desc}
      </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goal;
