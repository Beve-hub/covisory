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

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex bg-[var(--text-white)] items-center justify-center min-h-[70vh] py-12">
      <div className="max-w-6xl grid grid-col-1 md:grid-cols-2 gap-10 items-center">
      <div>
    <p className="text-[var(--primary-color)] text-lg font-semibold">Clients Feedback</p>
    <p className="text-[var(--text-black)] text-4xl font-bold">Our Client Reviews</p>
    <p className="text-[var(--gray-color)] text-md text-balance mt-2">
        We take pride in delivering outstanding service and ensuring customer satisfaction.  
        Here’s what our valued clients have to say about their experience with us.  
        Their feedback helps us grow and continue to improve our offerings.
    </p>
</div>


      <div className="max-w-lg w-full bg-[var(--text-white)] shadow-lg p-4 sm:p-8 flex flex-col items-center text-center relative">
        {/* Quote Icon */}
        <p className="text-gray-600 text-3xl">
          <BiSolidQuoteRight />
        </p>
        {/* Testimonial Text */}
        <p className="text-gray-700 text-base sm:text-lg italic mt-4">''{testimonials[currentIndex].text}''</p>
        {/* Image & Author */}
        <div className="flex flex-col items-center mt-6">
          <img
            src={testimonials[currentIndex].src}
            alt={testimonials[currentIndex].author}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-gray-300 shadow-md"
          />
          <p className="mt-3 text-lg font-semibold text-gray-800">{testimonials[currentIndex].author}</p>
        </div>
        {/* Indicator Dots */}
        <div className="flex gap-2 mt-4">
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
      </div>
      </div>
    </section>
  );
};

export default TestimonialCard;