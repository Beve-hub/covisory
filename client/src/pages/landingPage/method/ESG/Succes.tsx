import IMG from '../../../../assets/01.png';
import IMG2 from '../../../../assets/02.png';
import IMG3 from '../../../../assets/05.png';


//array of data
const card = [
    {src:IMG, title: 'Environmental Highlights', desc: 'Covisory Holdings Buyout Funds follow an asset-light approach, with electricity use as a key environmental factor. Several portfolio companies, like Wehkamp, TietoEvry, and Thoughtworks, are adopting Science-based and Carbon Neutral targets. Ongoing initiatives focus on waste reduction, reuse, and recycling, aiming to minimize complexity and resource consumption.'},
    {src:IMG2, title: 'Social Highlights', desc: 'Covisory Holdings portfolio companies indirectly employ over 1,000 people, making employee welfare a key priority. By tracking workforce indicators, Covisory identifies best practices and areas for improvement. A major focus is on inclusion and diversity across its portfolio.'},
    {src:IMG3, title: 'Governance Highlights', desc: 'Covisory Holdings emphasizes that strong corporate governance is key to sound management. Nearly all portfolio companies follow a code of conduct or ethics. Newer investments or companies with less focus on governance are actively guided to adopt essential codes and procedures within their first year.'},
]

const Succes = () => {
   
  return (
    <section className="w-screen bg-[var(--secondary-color)] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                {
                    card.map((item, index) => (
                        <div key={index} className='group shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[var(--primary-color)]  bg-[var(--text-white)] p-4 grid justify-center items-center rounded-lg'>
                            <div className='flex justify-center'>
                            <img src={item.src} alt={item.title} className='bg-[var(--light-gray)] p-4 rounded-full group-hover:bg-[var(--secondary-color)]'/>
                            </div>    
                            <div className=''>
                                <p className='text-[var(--text-black)] text-center py-4 font-bold text-lg group-hover:text-[var(--text-white)]'>{item.title}</p>
                                <p className='text-[var(--text-black)] text-center group-hover:text-[var(--text-white)]'>{item.desc.length > 200 ? item.desc.substring(0, 200) + "..." : item.desc }</p>
                            </div>
                        </div>    
                    ))
                }
        </div>
    </section>
  )
}

export default Succes