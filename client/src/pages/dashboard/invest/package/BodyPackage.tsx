import { useEffect, useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import IMG from "../../../../assets/02(2).png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


interface CardType {
  title: string;
  minPrice: number;
  maxPrice: number;
  min: string;
  interest: string;
  max: string;
  ref: string;
  desc: string;
}

const card: CardType[] = [
  { title: "Standard", minPrice: 100, maxPrice: 5000, min: "100.00 USD", interest: "2%", max: "3% Daily for 120Day(s)", ref: "1.00% Referral Commission", desc: "Trading Capital Returned" },
  { title: "Institutional",minPrice: 5001, maxPrice: 10000, min: "2000.00 USD", interest: "4.5%", max: "4.5% Daily for 60Day(s)", ref: "2.00% Referral Commission", desc: "Trading Capital Returned" },
  { title: "Prime", minPrice: 10001, maxPrice: 20000, min: "3000.00 USD",interest: "7.5%", max: "5% Daily for 3Day(s)", ref: "3.00% Referral Commission", desc: "Trading Capital Returned" },
  { title: "Shareholder", minPrice: 20001, maxPrice: 50000, min: "5000.00 USD", interest: "11%",  max: "6.5% Daily for 120Day(s)", ref: "4.00% Referral Commission", desc: "Trading Capital Returned" },
];

const BodyPackage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<CardType | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');

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

  const handleChoosePlan = (plan: CardType) => {
    setSelectedPlan(plan);
    setAmount(plan.minPrice.toString());
    setShowModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ plan: selectedPlan, amount, currency });
    navigate('/depositSummary');
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
              <p className="font-bold text-xl text-center mt-2">Glow {item.title}</p>
              <p className="font-bold text-xl text-center pb-4">Investment</p>
              <ul className="grid gap-2 text-center py-4">
                <li className="flex items-center justify-start gap-2"><BsPatchCheckFill /> Min Deposit: {item.min}</li>
                <li className="flex items-center justify-start gap-2"><BsPatchCheckFill /> {item.max}</li>
                <li className="flex items-center justify-start gap-2"><BsPatchCheckFill /> {item.ref}</li>
                <li className="flex items-center justify-start gap-2"><BsPatchCheckFill /> {item.desc}</li>
              </ul>
              <button 
                onClick={() => handleChoosePlan(item)}
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


      {showModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-xl font-bold text-center">Make Investment</h2>
            <div>
              <label className="block font-medium">Selected Plan</label>
              <input type="text" readOnly value={selectedPlan.title} className="w-full border p-2 rounded bg-gray-100" />
            </div>
            <div className="flex justify-between items-center ">
              <p>{selectedPlan.minPrice} - {selectedPlan.maxPrice}</p>
              <p>{selectedPlan.interest}</p>
            </div>

            <div>
              <label className="block mb-1 font-medium">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="USD">USD</option>
                <option value="NGN">NGN</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[var(--primary-color)] text-white rounded"
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default BodyPackage;
