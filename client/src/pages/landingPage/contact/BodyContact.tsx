import { GoHomeFill } from "react-icons/go";
import { MdEmail, MdOutlinePhoneAndroid, MdOutlineAccessTimeFilled } from "react-icons/md";



const cards = [
  { icon: <GoHomeFill size={30} />, title: "Our Address", tip: "PO Box 137215 Parnell, Auckland 1151, New Zealand" },
  { icon: <MdEmail size={30} />, title: "Email Address", tip: "support@covisoryholdingsfx.com" },
  { icon: <MdOutlinePhoneAndroid size={30} />, title: "Phone Numbers", tip: "+64 930 71 777" },
  { icon: <MdOutlineAccessTimeFilled size={30} />, title: "Office Hours", tip: "Mon - Fri : 9:00am - 5:00pm", top: "Weekends : Closed" }
];

const BodyContact: React.FC = () => {
  return (
    <section className="bg-[var(--text-white)] py-16 px-4 text-center md:text-left">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="group shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[var(--primary-color)]  bg-[var(--text-white)] p-4 grid justify-center items-center rounded-lg">
            <div className="flex  justify-center items-center">
              <p className="text-[var(--text-white)] bg-[var(--primary-color)] rounded-full p-4  text-center group-hover:bg-[var(--text-white)] group-hover:text-[var(--primary-color)]">{card.icon}</p>
              
            </div>
            <div className="mt-6">
            <p className="text-lg text-[var(--text-black)] font-semibold text-center  group-hover:text-[var(--text-white)]">{card.title}</p>
              <p className="text-[var(--text-black)] text-center  group-hover:text-[var(--text-white)]">{card.tip}</p>
              <p className="text-[var(--text-black)] mt-1 text-center  group-hover:text-[var(--text-white)]">{card.top}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BodyContact;
