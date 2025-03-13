import { useState, useEffect } from "react";
import IMG1 from "../../../assets/hero1.jpg";
import IMG2 from "../../../assets/hero2.jpg";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const images = [
  { src: IMG1, text: "Empowering Your Future", bug: "Explor Now", fix: "We are a founder-focused capital venture, We will help you reach your goals" },
  { src: IMG2, text: "We Manage Your Assets And Investment", bug: "Get Started", fix: "A trusted destination for traders worldwide, Start your investment journey with the best opportunity." },
];

const HeroPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 60000/2); // Change image every 1 minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-screen w-screen flex items-center justify-center px-10 bg-cover bg-center transition-all duration-1000 relative"
      style={{ backgroundImage: `url(${images[currentIndex].src})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center max-w-2xl">
        <h1 className="text-3xl font-bold md:text-4xl">{images[currentIndex].text}</h1>
        <p className="text-xl md:text-2xl font-normal mt-4">{images[currentIndex].fix}</p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="text-[--text-white] bg-[#071e63] rounded-md flex items-center gap-2 md:text-xl text-center py-2 px-4 " onClick={() => navigate('/login')}
          >{images[currentIndex].bug} <RiArrowRightDoubleLine /></button>
          <p
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 md:text-xl text-center  text-white cursor-pointer rounded-md"
          >
            <FaRegCirclePlay /> Who we are
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white p-6 rounded-lg w-[80%] max-w-3xl">
            <button className="absolute top-2 right-2 text-black text-2xl" onClick={() => setIsModalOpen(false)}>
              <IoClose />
            </button>
            <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/b4mwWD31l2Y?autoplay=1"
                title="Who we are"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroPage;