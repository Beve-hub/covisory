import IMG from "../../../assets/AIS.jpg";
import IMG2 from "../../../assets/FF.jpg";
import IMG3 from "../../../assets/fst.jpg";
import IMG4 from "../../../assets/dii.jpg";

const images = [
  { src: IMG, title: "AI Algorithm", sub: "Stocks Trade",num:'01' },
  { src: IMG4, title: "Diversity & Inculsion ", sub: "D & I",num:'02' },
  { src: IMG3, title: "Strategies", sub: "Team",num:'03' },
  { src: IMG2, title: "Financial Forcast", sub: "Forex Trade",num:'04' },
];

const Slide = () => {
  return (
    <section className="bg-[var(--text-white)] text-center md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center">
        {images.map((item, index) => (
          <div key={index} className="relative overflow-hidden group">
            <img
              src={item.src}
              alt={item.sub}
              className="w-full h-[25rem] object-cover transition-transform duration-500 group-hover:scale-105"
            />
             {/* number */}
             <div className="absolute top-5 right-5 transition-transform duration-500">
              <p className="text-2xl font-bold  text-white rounded-full z-99  opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.num}.
              </p>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-[var(--primary-light)] bg-opacity-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            
            {/* Title and Sub */}
            <div className="absolute bottom-5 left-5 text-white transition-opacity duration-500">
              <p className="text-2xl font-bold">{item.title}</p>
              <p className="text-lg  font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 sm:text-start">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slide;
