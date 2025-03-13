import { useState, useEffect } from "react";
import { BiSolidQuoteRight } from "react-icons/bi";

import IMG1 from "../../../assets/man4.jpg";
import IMG2 from "../../../assets/sophie2.jpg";
import IMG3 from "../../../assets/man3.jpg";
import IMG4 from "../../../assets/woman.jpg";

const testimonials = [
  {
    src: IMG1,
    text: "Covisory Holdings has been instrumental in managing our pension fund with precision and insight. Their research-driven approach and value-oriented strategies have consistently delivered strong returns while mitigating risks. We trust them for their deep expertise and proactive asset management.",
    author: "Matthew Sullivan",
  },
  {
    src: IMG2,
    text: "As a family office, we needed a firm that truly understands wealth preservation and growth. Covisory Holdings exceeded our expectations with their sophisticated investment strategies and in-depth market analysis. Their commitment to long-term value creation sets them apart.",
    author: "Sophie Kim",
  },
  {
    src: IMG3,
    text: "Our foundation sought a partner who could align financial growth with our mission-driven goals. Covisory Holdings provided a tailored investment strategy that maximized returns while ensuring sustainable and ethical investments. Their expertise in clean energy and technology is unmatched.",
    author: "Charlotte Bennett",
  },
  {
    src: IMG4,
    text: "Covisory Holdings' meticulous approach to asset allocation and risk assessment has been a game-changer for our financial firm. Their deep market insights, combined with proactive investment management, have consistently generated superior results for our clients.",
    author: "Liam Thompson",
  },
];

const Testimonia = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);



  return (
    <section className="bg-[var(--secondary-color)] flex flex-col items-center justify-center min-h-[60vh] p-6 text-center relative">
      <div className="max-w-3xl mx-auto relative overflow-hidden h-80 w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 text-center">
              {/* Quote Icon */}
              <p className="text-[var(--text-white)] text-3xl text-center flex justify-center">
                <BiSolidQuoteRight />
              </p>

              {/* Testimonial Text */}
              <p className="text-lg italic text-[--text-white] px-4">''{testimonial.text}''</p>

              {/* Image & Author */}
              <div className="flex flex-col items-center mt-6">
                <img
                  src={testimonial.src}
                  alt={testimonial.author}
                  className="w-[4rem] h-[4rem] rounded-full object-cover border-4 border-gray-300 shadow-lg"
                />
                <p className="mt-2 text-lg font-semibold text-[var(--text-white)]">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

   

      {/* Indicator Dots */}
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              currentIndex === index ? "bg-blue-600 scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonia;
