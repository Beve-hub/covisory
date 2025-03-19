import IMG from "../../../../assets/di1a.jpg";
import IMG2 from "../../../../assets/di1a.jpg";
import { GiLaurelsTrophy } from "react-icons/gi";

const BodyDI = () => {
  return (
    <section className="w-screen bg-[var(--text-white)] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="p-6">
          <p className="relative max-w-[20rem] overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
            Diversity and Inclusion
            </span>
          </p>
          <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
          Our Commitment to an Inclusive Workplace
          </h2>
          <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
          We are firmly committed to diversity. We are committed to fostering a sense of community among our employees and work to build an inclusive workplace. It is the duty of every employee at Covisory Holdings to promote inclusivity. Our teams are aware that diversity and inclusion are differentiators.
          <br/>
          <br/>
It helps us become more resilient and creative, which in turn enables us to better serve our investors, portfolio companies, and the neighborhoods where we work..
            <br/>
            <br/>
Senior Partners make up the Inclusion and Diversity Committee at Covisory Holdings, which is responsible for leading the organization's efforts to promote inclusion. We recently brought on board a committed senior leader to lead our internal I&D initiatives and assist our portfolio companies as they work to become even more inclusive. Covisory Holdings is dedicated to fostering an atmosphere where everyone, regardless of the diversity they bring to our teams, feels safe, seen, valued, and connected.</p>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="bg-[var(--text-black)] h-[30rem] absolute opacity-30 top-0"></div>
          <img
            src={IMG}
            alt="Finance & Investment"
            className="w-full h-[20rem] object-cover"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          <img
            src={IMG2}
            alt="Finance & Investment"
            className="w-full h-[8rem] object-cover"
          />
          <div className=" bg-[var(--secondary-color)] px-4 py-2 items-center transition duration-700 ease-in-out">
            <GiLaurelsTrophy size={40} color="var(--primary-color)" />
            <div>
              <h2 className="text-xl font-bold">Diversity
              </h2>
              <h2 className="text-xl font-bold">
              Inclusion</h2>
            </div>
          </div>
          </div>
          
        </div>
      </div>
      
      {/* Full-Width Paragraph */}
      <p className="text-[var(--text-black)] mt-8 text-sm leading-relaxed max-w-6xl mx-auto px-6">
      Market habits are highly dynamic in the realm of forex. It can be challenging to forecast when and where to trade in order to get the most profits on your coin, especially with the burgeoning cryptocurrency market of today. With an automated system, you'll be able to live stress-free knowing that a trading robot will handle all of your trading. Trading robots are computer programs that decide whether to trade using mathematical algorithms.
    <br />
    <br />
The trading robots are able to derive indications from market swings that are then converted into orders that facilitate trading. Trading robots take away all of the psychological stress associated with forex trading. Our conviction that comprehensive fundamental analysis, a long-term investment perspective, and a valuation discipline can yield appealing long-term investment performance for our clients has not altered.</p>
    </section>
  )
}

export default BodyDI