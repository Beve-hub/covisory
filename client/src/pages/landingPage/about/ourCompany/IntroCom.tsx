import IMG from "../../../../assets/sm1.jpg";


const IntroCom = () => {
  return (
    <section className="w-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
 {/* Image Section */}
 <div className="relative ">
        {/* First Image with Slant Effect */}
        <div className="bg-[var(--text-black)] h-[30rem] absolute opacity-30 top-0"></div>
        <img
          src={IMG}
          alt="Finance & Investment"
          className="w-full h-[30rem] object-cover rounded-lg"
        />
      </div>


      <div className="p-6">
        <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
          <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
          Why Choose Us
          </span>
        </p>
        <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
        An investment that takes you to great heights
        </h2>
        <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
        Covisory Holdings Asset Management is a leading global alternative asset manager with over $27 billion
         in assets under management, spanning real estate, infrastructure, renewable energy, private equity, and credit.
          Our goal is to deliver attractive long-term, risk-adjusted returns for clients and shareholders.
          <br/>
          <br/>
         We offer a diverse range of public and private investment products and services for institutional and retail clients, 
         aligning our interests by co-investing alongside them. With a robust $13 billion stake in our listed affiliates—Covisory
          Holdings Property Partners, Infrastructure Partners, Renewable Partners, and Business Partners—we leverage substantial 
          capital to invest in high-quality businesses and assets across various geographies and asset classes.
        </p>
      </div>

     
      </div>
    </section>
  );
};

export default IntroCom;
