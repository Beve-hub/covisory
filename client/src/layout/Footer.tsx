const Footer = () => {
  return (
    <section className="bg-[var(--text-black)] w-screen pt-16 pb-6 px-6 text-center md:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-6 items-start">
        <div>
          <p className="text-[var(--text-white)]">
            Covisory Holdings is a global investment firm managing diverse fund strategies, prioritizing client interests, research-driven investments, and long-term growth.
          </p>
        </div>
        <div >
          <p className="text-[var(--text-white)] font-bold text-center ">LINK</p>
          <ul className="text-[var(--text-white)] grid text-center gap-2 mt-4">
            <li><a>About</a></li>
            <li><a>ESG</a></li>
            <li><a>Investments</a></li>
            <li><a>Forex</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[var(--text-white)] font-bold">OFFICE</p>
          <ul className="text-[var(--text-white)] text-balance mt-4 grid gap-2">
            <li>PO Box 137215, Parnell, Auckland 1151, New Zealand</li>
            <li>+64 930 71 777</li>
            <li><a>support@covisoryholdingsfx.com</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[var(--text-white)] font-bold">NEWSLETTER</p>
          <p className="text-[var(--text-white)] text-sm my-4 ">Signup for our latest case studies.</p>
          <form className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2  text-[var(--text-white)] border-1 border-[var(--text-white)] w-full md:w-auto"
            />
            <button
              type="submit"
              className="bg-[var(--primary-color)] text-[var(--text-white)] px-4 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-20 pt-6 flex flex-col md:flex-row justify-between items-center text-[var(--text-white)] text-sm">
        <p>© 2024 Investment Expert. All Rights Reserved</p>
        <div className="flex gap-4">
          <p><a>Terms & Conditions</a></p>
          <p><a>Privacy Policy</a></p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
