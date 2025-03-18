import IMG from "../../../../assets/trust.webp"
import IMG2 from "../../../../assets/confidence.webp"
import IMG3 from "../../../../assets/secure.webp"

const card = [
    {icon:IMG, title:'Trusted by Investors', desc:'With a proven track record of success, Covisory Holdings has earned the trust of investors worldwide. Our transparent approach, expert insights, and consistent performance set us apart as a reliable investment partner.'},
    {icon: IMG2, title:'Invest With Confidence',desc:'We prioritize investor confidence by providing data-driven insights, risk assessment, and strategic financial planning. Our commitment to research-backed investments ensures long-term value creation.'},
    {icon: IMG3, title:'Secure Platform', desc:'Security is at the core of our operations. We utilize advanced technology and compliance measures to safeguard your investments, ensuring a seamless and protected investment experience.'},
]
const Expert = () => {
  return (
    <section className="w-screen bg-[var(--text-white)] py-20">
    <div className="max-w-6xl mx-auto">
 {/* Text Content */}
 <div className="p-6">
      <p className="w-[10rem] relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
    
Our Expertise
        </span>
       
      </p>
      <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
      Why Invest With Covisory Holdings?
      </h2>
      <p className="text-[var(--text-black)] mt-4 text-sm text-balance max-w-[50rem] leading-relaxed">
      At Covisory Holdings, we provide a strategic investment approach that covers 
      the entire risk/return spectrum, ensuring customized solutions that align with each client’s goals.
       Our philosophy is built on deep, data-driven research rather than speculation, allowing us to deliver 
       sustainable and informed investment strategies.
       </p>
    </div>

    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center py-6">
      {card.map((item,index) => (
        <div key={index}
        className={`group relative    shadow-lg transition-all duration-500 transform hover:scale-105 cursor-pointer ${
            index === 0
              ? "translate-y-18 bg-[var(--secondary-color)] text-[var(--text-white)]"
              : index === 1
              ? "translate-y-10 bg-[var(--text-white)] text-[var(--text-black)]"
              : "translate-y-4 bg-[var(--text-white)] text-[var(--text-black)]" 
          }`}
        >
             <div className="overflow-hidden ">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
            <p className="font-bold text-xl py-4">
                {item.title}
            </p>
            <p className="">{item.desc.split(" ").length > 50
                  ? item.desc.split(" ").slice(0, 50).join(" ") + "..."
                  : item.desc}</p>
            </div>
        </div>
      ))}
    </div>
    
    </div>
  </section>
  )
}

export default Expert