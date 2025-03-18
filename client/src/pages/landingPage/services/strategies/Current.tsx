import IMG from "../../../../assets/sta7a.jpg";
import IMG2 from "../../../../assets/sta7b.jpg";

const Current = () => {
  return (
    <section className="w-screen bg-[var(--text-white)] py-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

 {/* Image Section */}
 <div className="relative flex flex-col items-center md:items-start">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">

            <img
              src={IMG2}
              alt="Partner"
              className="w-[10rem] h-[10rem] sm:h-[10rem] rounded-lg shadow-lg object-cover opacity-80 absolute -top-5 -left-5 hidden sm:block transition-transform duration-300 group-hover:scale-105"
            />
            <div className="relative sm:top-0 sm:left-0 lg:top-4 lg:left-[5rem] ">
                
              <img
                src={IMG}
                alt="About"
                className="w-[45rem] h-[30rem] object-cover sm:h-[25rem] rounded-lg relative z-10 transition-transform duration-300 group-hover:scale-105 "
              />
            </div>
          </div>
          
        </div>
    {/* Text Content */}
    <div className="p-6">
      <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--secondary-color)]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
        Local Community and Industry Involvement
        </span>
       
      </p>
      <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
      Commitment to Community Engagement and Diversity Initiatives
      </h2>
      <p className="text-[var(--text-black)] mt-4 text-sm leading-relaxed">
      We actively look for opportunities to make a difference by collaborating with regional organizations as well as organizations from across the industry as part of our commitment to the communities that we serve and in which we operate.
      <br/>
       We also kept increasing our participation in and support of a number of industry programs that target underrepresented talent outside of local organizations. This might be done through particular universities, like the Women in Investing Conference at Cornell or the Women in Investment Management at Chicago Booth. The Robert S. Toigo Foundation, for example, focuses on the professional development and increased leadership of underrepresented talent in the financial services sector. Since 2013, we have collaborated with the Toigo Foundation. Along with taking part in Toigo's spring Catapult event every year, Covisory Holdings has also hosted Toigo's flagship annual leadership conference, the Fall Apex, in 2014, 2016, 2019, and is currently in discussions to host in 2021.
      </p>
    </div>
    </div>
  </section>
  )
}

export default Current