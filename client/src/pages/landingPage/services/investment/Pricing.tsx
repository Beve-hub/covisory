import { useEffect, useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import IMG from "../../../../assets/02(2).png";

const card = [
  { title: "Standard", min: "100.00 USD", max: "3% Daily for 120Day(s)", ref: "1.00% Referral Commission", desc: "Trading Capital Returned" },
  { title: "Institutional", min: "2000.00 USD", max: "4.5% Daily for 60Day(s)", ref: "2.00% Referral Commission", desc: "Trading Capital Returned" },
  { title: "Prime", min: "3000.00 USD", max: "5% Daily for 3Day(s)", ref: "3.00% Referral Commission", desc: "Trading Capital Returned" },
  { title: "Shareholder", min: "5000.00 USD", max: "6.5% Daily for 120Day(s)", ref: "4.00% Referral Commission", desc: "Trading Capital Returned" },
];

const Pricing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(2);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % card.length);
    }, 7000); // Increased delay for smoother transition
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-screen bg-[var(--secondary-color)] py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="p-6 text-center">
          
          <h2 className="text-[var(--text-white)] font-bold text-3xl py-4">
            Investment Plan
          </h2>
        </div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 10) / visibleCards}%)`, width: `${(card.length + visibleCards) * (100 / visibleCards)}%` }}>
            {[...card, ...card.slice(0, visibleCards)].map((item, index) => (
              <div key={index} className={`w-${12 / visibleCards}/12 flex justify-center items-center px-4`}>
                <div className="shadow-lg bg-[var(--text-white)] text-[var(--text-black)] p-6 rounded-lg w-full">
                  <div className="flex justify-center">
                    <img src={IMG} alt="icon" className="w-[3rem] border-2 rounded-full p-2" />
                  </div>
                  <p className="font-bold text-xl text-center">Covisory {item.title}</p>
                  <p className="font-bold text-xl text-center pb-4">Investment</p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2"><BsPatchCheckFill /> Min Deposit: {item.min}</li>
                    <li className="flex items-center gap-2"><BsPatchCheckFill /> {item.max}</li>
                    <li className="flex items-center gap-2"><BsPatchCheckFill /> {item.ref}</li>
                    <li className="flex items-center gap-2"><BsPatchCheckFill /> {item.desc}</li>
                  </ul>

                  <p className="p-2 text-center bg-[var(--primary-color)] text-[var(--text-white)] my-6 cursor-pointer">
                    Choose Plan</p>
                
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators for all screens */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(card.length / visibleCards) }).map((_, index) => (
            <span key={index} className={`h-3 w-3 rounded-full ${index === Math.floor(currentIndex / visibleCards) ? "bg-[var(--primary-color)]" : "bg-gray-400"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
