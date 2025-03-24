import { useEffect, useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import IMG from "../../../../assets/02(2).png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const card = [
  { title: "Standard", min: "100.00 USD", max: "3% Daily for 120Day(s)", ref: "1.00% Referral Commission", desc: "Trading Capital Returned" },
  { title: "Institutional", min: "2000.00 USD", max: "4.5% Daily for 60Day(s)", ref: "2.00% Referral Commission", desc: "Trading Capital Returned" },
  { title: "Prime", min: "3000.00 USD", max: "5% Daily for 3Day(s)", ref: "3.00% Referral Commission", desc: "Trading Capital Returned" },
  { title: "Shareholder", min: "5000.00 USD", max: "6.5% Daily for 120Day(s)", ref: "4.00% Referral Commission", desc: "Trading Capital Returned" },
];

const BodyPackage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % card.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + card.length) % card.length);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="relative flex flex-col items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-transform duration-500 mr-16">
          {card.slice(currentIndex, currentIndex + visibleCards).map((item, idx) => (
            <div
              key={idx}
              className="shadow-lg bg-white text-black p-6 rounded-lg flex flex-col items-center"
            >
              <img src={IMG} alt="icon" className="w-12 h-12 border-2 rounded-full p-2" />
              <p className="font-bold text-xl text-center mt-2">Covisory {item.title}</p>
              <p className="font-bold text-xl text-center pb-4">Investment</p>
              <ul className="grid gap-2 text-center py-4">
                <li className="flex items-center justify-start gap-2"><BsPatchCheckFill /> Min Deposit: {item.min}</li>
                <li className="flex items-center justify-start gap-2"><BsPatchCheckFill /> {item.max}</li>
                <li className="flex items-center justify-start gap-2"><BsPatchCheckFill /> {item.ref}</li>
                <li className="flex items-center justify-start gap-2"><BsPatchCheckFill /> {item.desc}</li>
              </ul>
              <button 
                onClick={() => navigate('/deposit')}
                className="p-2 mt-4 bg-[var(--primary-color)] text-white rounded w-full"
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        <div className="absolute top-[10rem] flex justify-between w-full mt-4 mr-16">
          <button onClick={prevSlide} className="p-3 bg-[var(--gray-color)] text-[var(--text-white)] rounded-full shadow-md">
            <IoIosArrowBack />
          </button>
          <button onClick={nextSlide} className="p-3 bg-[var(--gray-color)] text-[var(--text-white)] rounded-full shadow-md ">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodyPackage;
