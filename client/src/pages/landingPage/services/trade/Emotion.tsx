import IMG from "../../../../assets/trade3a.jpg";
import IMG2 from "../../../../assets/trade3b.jpg";
import { GiLaurelsTrophy } from "react-icons/gi";
const Emotion = () => {
  return (
    <section className="w-screen bg-[var(--text-white)] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="p-6">
          <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
             px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
             before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
            <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
            No Emotions
            </span>
          </p>
          <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
          Emotion-Free and Lightning-Fast Trading
          </h2>
          <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
          One of the biggest challenges in forex trading is uncertainty.
It serves as the impediment that prevents you from making wise trading choices. On the other side, the emotional motivation that enables you to engage in irrational trading is greed.
All of these are psychological indulgences that trading machines do not exhibit.
Trading robots are even more effective because they don't rely on guesses.
This is because they objectively provide the most quantifiable trading data by using historical tactics.<br/>
            <br/>
            The trading robot's ability to spot opportunities and act on them depends on the speed of the computer.
             When compared to a human trader who must manually enter an order, this is incomparable. Accordingly,
            it would require a large number of brilliant individuals to do what a trading robot can in a single trading session. </p>
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
              <h2 className="text-xl font-bold">Corporate
              </h2>
              <h2 className="text-xl font-bold">
              Ethics Program</h2>
            </div>
          </div>
          </div>
          
        </div>
      </div>
      
    </section>
  )
}

export default Emotion