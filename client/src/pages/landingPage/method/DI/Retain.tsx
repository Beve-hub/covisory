import IMG from '../../../../assets/di12a.jpg'

const Retain = () => {
  return (
    <section className="w-screen bg-[var(--text-white)] py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
     
 {/* Text Content */}
      <div className="p-6">
        <p className="relative max-w-[20rem] overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
           px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
           before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
          <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
          Inclusive Workplaces
          </span>
        </p>
        <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
        Inclusive environments attract and retain talent
        </h2>
        <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
        Beyond gender diversity, research has discovered a correlation between LGBT-welcoming policies and higher stock returns, higher firm value, higher productivity, and higher profitability. One theory is that sexual-orientation equality increases a company's competitive advantages in the labor markets, though more research is required to fully understand the underlying mechanism.
<br />
<br />
Additionally, by ensuring that all talented workers, including new parents and those caring for elderly family members, can thrive in their positions, policies like flexible hours and daycare services may help retain talent and lower employee turnover.
<br />
<br />
Companies can further develop and retain talent by using more conventional human capital metrics, such as internal promotion, employee satisfaction, and management training, along with systemic change to help employees adopt new habits and practices.</p>
      </div>

 {/* Image Section */}
 <div className="relative">
        <div className="bg-[var(--text-black)] h-[30rem] absolute opacity-30 top-0"></div>
        <img
          src={IMG}
          alt="Finance & Investment"
          className="w-full h-[30rem] object-cover"
        />
        
        
      </div>
    </div>
  </section>
  )
}

export default Retain