import sd1 from "../../../../assets/fx03.jpg";
import sd2 from "../../../../assets/fx04.jpg";
import IMG from "../../../../assets/fx1a.jpg";
import IMG2 from "../../../../assets/fx2.jpg";
import IMG3 from "../../../../assets/fx3.jpg";
import IMG4 from "../../../../assets/fx4.jpg";
import IMG5 from "../../../../assets/fx5.jpg";
import IMG6 from "../../../../assets/fx6.jpg";
import icon1 from "../../../../assets/04.png";
import icon2 from "../../../../assets/02(2).png";
import icon3 from "../../../../assets/05.png";
import { MdAccessTimeFilled, MdWifiCalling3 } from "react-icons/md";
import { ImLocation } from "react-icons/im";


const cards=[
    {src:icon1, title:'Cryptography', desc:'The Covisory Holdings Blockchain will use unique cryptography designed to be immune to fundamental security flaws and attacks present in current cryptographic techniques.'},
    {src:icon2, title:'Online Bank', desc:'Covisory Holding plans to build a digital bank on its blockchain platform to support the full digitalization of financial transactions, products, and services.'},
    {src:icon3, title:'Socio-Economic Framework', desc:'Covisory Holdings Blockchain will employ advanced unique cryptography that is resistant to security flaws and even powerful quantum computing attacks.'},
]

const BodyFx = () => {
  return (
    <section className="bg-[var(--light-gray)] py-40 px-4 text-center md:text-left">
      <div className="max-w-6xl mx-auto gap-10 md:grid md:grid-cols-10 flex flex-col-reverse">

        <div className="w-full md:col-span-3 ">
          <div className="border border-[var(--gray-color)] p-4">
            <h2 className="text-black font-bold text-lg">Trade with Us</h2>
          </div>

          <div className="border border-[var(--gray-color)] p-4">
            <img src={sd1} alt="Crypto Trading" className="w-full" />
            <p className="text-[var(--text-black)] mt-2">
              Trading cryptocurrency with Covisory Holding is the safe, convenient, and hassle-free way to invest in cryptocurrencies
              like Bitcoin, Ethereum, Litecoin, and many more.
            </p>
          </div>

          <div className="border border-[var(--gray-color)] p-4 mt-6">
            <h2 className="text-black font-bold text-lg">Crypto</h2>
          </div>

          <div className="border border-[var(--gray-color)] p-4">
            <img src={sd1} alt="Crypto Information" className="w-full" />
            <p className="text-[var(--text-black)] mt-2">
              Bitcoin and other cryptocurrencies carry significant risks and are more volatile than traditional currencies. Trade with
              caution and understand that you do not own the underlying asset.
            </p>
          </div>

          <div className="border border-[var(--gray-color)] p-4 mt-6">
            <h2 className="text-black font-bold text-lg">Need help?</h2>
          </div>

          <div className="border border-[var(--gray-color)] p-4">
            <img src={sd2} alt="Help and Support" className="w-full " />
            
            <div className="border-b border-[var(--gray-color)] flex items-center gap-4 my-4 pb-2">
                <p className="text-[var(--primary-color)]" >
                <MdAccessTimeFilled size={32} />
                </p>
              
              <div>
                <p className="text-[var(--text-black)]">Monday - Friday</p>
                <p className="text-[var(--text-black)] font-semibold">09:00 AM - 05:00 PM</p>
              </div>
            </div>

            <div className="border-b border-[var(--gray-color)] flex items-center gap-4 my-4 pb-2">
            <p className="text-[var(--primary-color)]">
            <MdWifiCalling3 size={32}  />
            </p>
             
              <div>
                <p className="text-[var(--text-black)]">Service Available</p>
                <p className="text-[var(--text-black)] font-semibold">+64 930 71 777</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4">
            <p className="text-[var(--primary-color)]">
            <ImLocation size={32}  />
            </p>
              <div>
                <p className="text-[var(--text-black)]">PO BOX 137215</p>
                <p className="text-[var(--text-black)] font-semibold">Parnell, Auckland 1151, New Zealand</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-7">
            <div>
            <img src={IMG} alt="Objective" className="w-full h-[30rem] object-cover" />
          <div className="mt-4">
            <h2 className="text-black font-bold text-xl">Our Objective.</h2>
            <p className="text-[var(--text-black)] mt-2">
              Covisory Holdings aims to provide forex strategies, signals, and analysis to help users learn the true knowledge of
              trading. We also offer investment opportunities where experts trade on behalf of users, providing returns on a daily,
              weekly, or monthly basis while they educate themselves.
            </p>
            </div>
          
          </div>

          <div className="my-4">
            <img src={IMG2} alt="Objective" className="w-full h-[30rem] object-cover" />
          <div className="mt-4">
            <h2 className="text-black font-bold text-xl">Our Goals.</h2>
            <p className="text-[var(--text-black)] mt-2">
        Our aim is to provide its users with effective ways of earning good returns from the forex
         market either through our educational system or our experts trading and making good returns on behalf of the users.
        OUR SYSTEM IS A SIMPLE DEFINITION OF LEARN AND EARN
            </p>
            </div>
          
          </div>

          <div className="my-4">
            <img src={IMG3} alt="Objective" className="w-full h-[30rem] object-cover" />
          <div className="mt-4">
            <h2 className="text-black font-bold text-xl">Aims we have.</h2>
            <p className="text-[var(--text-black)] mt-2">
            
Our VISION is to provide high-quality learning opportunities to everyone who wants to educate themselves about the forex market. This encourages the development of independent learners who can contribute creatively to their community and to society at large.
Additionally, by 2025, the platform aims to have a market capitalization of $20 billion USD and a user base of more than 15 million people. Covisory Holdings already makes use of the benefits of artificial intelligence software (A.I.) to secure user funds and gain a significant competitive advantage in the forex market.
This implementation allowed for a significant increase in the precision of analytical data acquired for the creation, configuration, and fine-tuning of algorithmic systems, as well as a general increase in platform operation efficiency.
            </p>
            </div>
          
          </div>

          <div className="my-4">
            <img src={IMG4} alt="Objective" className="w-full h-[30rem] object-cover" />
          <div className="mt-4">
            <h2 className="text-black font-bold text-xl">Right People of A Fund Adviser</h2>
            <p className="text-[var(--text-black)] mt-2">
            
            Our consultants believe in the value that you manage your regulatory compliance policies proced we have specialist for managed employee performance ands comparable internal advice function train people quickly well with e-business so they highly efficient manufactured products we are feel that this special functions is part of the success business.</p>
            </div>
          
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
          {
            cards.map((item,index) => (
            <div key={index} className='group shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[var(--primary-color)]  bg-[var(--text-white)] p-4 grid justify-center items-center rounded-lg'>
            <div className='flex justify-center'>
            <img src={item.src} alt={item.title} className='bg-[var(--light-gray)] p-4 rounded-full group-hover:bg-[var(--text-white)]'/>
            </div>    
                <div>
                    <h2 className='text-[var(--text-black)] text-center py-4 font-bold text-lg group-hover:text-[var(--text-white)]'>{item.title}</h2>
                    <p className='text-[var(--text-black)] text-center group-hover:text-[var(--text-white)]'> {item.desc}</p>
                </div>
            </div>
            ))
          }
          </div>
          <div className="my-4">
            <img src={IMG5} alt="Objective" className="w-full h-[30rem] object-cover" />
          <div className="mt-4">
            <h2 className="text-black font-bold text-xl">Why Engage Forex Trading?</h2>
            <p className="text-[var(--text-black)] mt-2">
          
Trading foreign exchange has many features and advantages. In addition to being the most active exchange in the world, unlike the stock exchange, the forex market is open twenty-four hours a day, five days per week, from Monday through Friday.
Because of this, traders now have a good possibility to transact at any hour of the day or night. Because they are traded more frequently and are therefore potentially more liquid, the major currencies can generally offer traders the best potential trading opportunities. When the market is most active, many traders believe that this is the best time to trade.

</p>
</div>
          
          </div>

          <div className="my-4">
            <img src={IMG6} alt="Objective" className="w-full h-[30rem] object-cover" />
          <div className="mt-4">
            <h2 className="text-black font-bold text-xl">Purchasing Exchange-Traded Funds</h2>
            <p className="text-[var(--text-black)] mt-2">    
             Exchange-traded funds (ETFs) are the ideal product to quickly assemble a diversified portfolio, which simplifies investing.
             We provide a broad selection of ETFs that trade on 19 important exchanges.
             There are many investment opportunities, whether you want to invest in regional or international ETFs.
             Even better, we provide a Core Selection of 200 ETFs with no commission fees.
             Spread, currency, and external product costs might be involved. View the fair use policy, conditions, and ETF Core Selection here. Open a free account to explore the options.
             We make investing in ETFs accessible to everyone with our low fees and varied trading options. View a detailed summary of our exceptional rates here.
             </p>
             </div>
          
          </div>

        </div>
      </div>
    </section>
  );
};

export default BodyFx;
