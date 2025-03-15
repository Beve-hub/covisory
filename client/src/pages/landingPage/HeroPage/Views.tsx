const Views = () => {
    return (
      <section className="bg-[var(--primary-light)] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto grid justify-center items-center text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--text-black)] text-balance leading-tight">
              Don’t Hesitate to Invest Now, We Will Give You The Best!
            </h2>
            <p className="mt-4 text-lg text-[var(--gray-color)] text-center text-balance py-2">
              Take the first step towards securing your future with our expert investment solutions. 
              Our team is dedicated to providing top-notch guidance and strategies to help you grow your wealth.
            </p>
          </div>
          <div className="flex justify-center py-2 md:justify-center">
            <p className="bg-[var(--primary-color)] text-white font-semibold py-3 px-8 rounded-lg shadow-lg cursor-pointer hover:opacity-90">
              Contact Us
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Views;
  