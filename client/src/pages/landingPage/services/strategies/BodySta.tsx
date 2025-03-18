import IMG from "../../../../assets/sta1a.jpg";
import IMG2 from "../../../../assets/sta1b.jpg";

const BodySta = () => {
  return (
    <section className="w-screen bg-[var(--text-white)] py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

 {/* Image Section */}
 <div className="relative flex flex-col items-center md:items-start">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">

            <img
              src={IMG2}
              alt="Partner"
              className="w-[10rem] h-[10rem] sm:h-[10rem] rounded-lg shadow-lg object-cover opacity-80 absolute -top-5 -left-5 hidden sm:block transition-transform duration-300 group-hover:scale-105"
            />
            <div className="relative sm:top-0 sm:left-0 lg:top-4 lg:left-[5rem] ">
                
              <img
                src={IMG}
                alt="About"
                className="w-[45rem] object-cover sm:h-[25rem] rounded-lg relative z-10 transition-transform duration-300 group-hover:scale-105 "
              />
            </div>
          </div>
          
        </div>
    {/* Text Content */}
    <div className="p-6">
      <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
        Global Reach
        </span>
       
      </p>
      <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
      Our Commitment to Ethical and Strategic Investing
      </h2>
      <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
      Since 2014, Covisory Holdings has offered its clients value-added investment solutions.
      Despite the fact that since our inception, our investment strategies, clients, and assets 
      have all increased significantly, there are a few guiding principles that have remained constant. 
      These are what we refer to as our guiding principles:
      <ul>
        <li>1. <span>Always act in the clients' best interests</span></li>
        <li>2. <span>Conduct yourself in a moral and legal manner.</span></li>
        <li>3. <span>Be fiercely competitive to succeed.</span></li>
        <li>4. <span>We base our investment strategies on evidence-based research</span></li>
        <li>5. <span> Place a focus on financial stability</span></li>
        <li>6. <span>Provide chances for our employees to contribute to both our success and their own success.</span></li>
      </ul>
        Following these guidelines has been beneficial for us,
        and we think it's the secret to generating long-term client 
        satisfaction and, as a result, to our success as a firm. 
        These principles guide our approach to responsible investing, 
        from the investment strategies we recommend to clients to the way our company operates.
      </p>
    </div>
    </div>
  </section>
  )
}

export default BodySta