import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IMG from '../../../../assets/boss 2.jpg'
import IMG1 from '../../../../assets/amanda.jpg'
import IMG2 from '../../../../assets/sarh.jpg'
import IMG3 from '../../../../assets/man4.jpg'
import IMG4 from '../../../../assets/susan.jpg'
import IMG5 from '../../../../assets/jason.jpg'

import { FaInstagram } from "react-icons/fa6";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";


interface TeamMember {
    src: string;
    name: string;
    title: string;
    contact1: string;
    contact2: string;
    description: string;
    media?: React.ReactNode;
    face?: React.ReactNode;
    youtube?: React.ReactNode;
}

const imageCards: TeamMember[] = [
    { src: IMG, name: "John Carter", 
      title: "Chief Investment Officer", 
      media: <FaInstagram />, 
      face: <TiSocialFacebookCircular />, 
      youtube: <AiOutlineYoutube />, 
      description: 'Mr. Carter has been leading investment strategies for over two decades, specializing in portfolio management and financial consulting. She holds an MBA from the University of Sydney and is a CFA® charterholder.',
      contact1: '(02) 5555-1234',
      contact2: '(04) 1234-5678', 
    },

    { src: IMG1, name: "Amanda South ", 
        title: "Head of Equity Research", 
        media: <FaInstagram />, 
        face: <TiSocialFacebookCircular />, 
        youtube: <AiOutlineYoutube />, 
        description: 'Amanda  has a strong background in equity research and financial analysis, providing deep insights into global markets. He holds a Master’s in Finance from the University of Melbourne.',
        contact1: '(02) 5555-5678',
        contact2: '(04) 8765-4321', 
    },

    { src: IMG2, name: "Sarah Thompson", 
        title: "Senior Portfolio Manager", 
        media: <FaInstagram />, 
        face: <TiSocialFacebookCircular />, 
        youtube: <AiOutlineYoutube />, 
        description: 'Sarah is an expert in portfolio management, risk assessment, and alternative investments. She has worked in the financial sector for 15 years and holds a CFA® designation.',
        contact1: '(02) 4444-9876',
        contact2: '(04) 3456-7890', 
    },
            
    { src: IMG3, name: "Michael Robinson", 
        title: "Head of Risk Management", 
        media: <FaInstagram />, 
        face: <TiSocialFacebookCircular />, 
        youtube: <AiOutlineYoutube />, 
        description: 'Michael has over 18 years of experience in financial risk management and regulatory compliance. He holds a Master’s in Financial Risk from the Australian National University.',
        contact1: '(02) 3333-5432',
        contact2: '(04) 6789-1234', 
    },
                
    { src: IMG4, name: "Emily Watson", 
        title: "Director of Wealth Management", 
        media: <FaInstagram />, 
        face: <TiSocialFacebookCircular />, 
        youtube: <AiOutlineYoutube />, 
        description: 'Emily specializes in wealth planning and financial advisory services for high-net-worth clients. She has been in the industry for over a decade and holds a CFP® certification.',
        contact1: '(02) 2222-6543',
        contact2: '(04) 8901-2345', 
    },
                    
    { src: IMG5, name: "David Lee", 
        title: "Venture Capital Specialist", 
        media: <FaInstagram />, 
        face: <TiSocialFacebookCircular />, 
        youtube: <AiOutlineYoutube />, 
        description: 'David has a keen eye for identifying high-growth startups and venture capital opportunities. He has successfully led multiple funding rounds and holds an MBA in Finance from the University of Queensland.',
        contact1: '(02) 1111-7890',
        contact2: '(04) 5678-9012', 
    },                 
];


const Leader = () => {
    const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleClick = (item: TeamMember) => {
    if (!item) return;
    navigate("/member", { state: { item } });
  };
  

  return (
    <section className="bg-[var(--text-white)] py-16 px-4 text-center md:text-left">
      <div className="max-w-6xl mx-auto items-center">
      <div className="p-6">
      <p className="relative overflow-hidden border-[var(--primary-color)] font-bold text-lg border-l-4 text-[var(--text-black)] w-[20rem]
         px-4 transition-all duration-300 group hover:text-[var(--text-white)] hover:bg-[var(--button-color)] before:absolute before:top-0 
         before:left-0 before:w-0 before:h-full before:bg-[var(--primary-color)] before:transition-all before:duration-500 hover:before:w-full">
        
        <span className="relative z-10 transition-all duration-300 group-hover:text-[var(--text-white)]">
        The Team
        </span>
       
      </p>
      <h2 className="text-[var(--text-black)] font-bold text-3xl py-4">
      Meet Our Expert Team
      </h2>
      <p className="text-[var(--text-black)] max-w-[50rem]">
      Our team is more than just finance—we are global leaders, innovators, and community-driven professionals.
      With expertise in investments, FX trading, venture capital, and real estate, we create lasting value. 
      Guided by shared principles, we drive impact for investors, foundations, and individuals, shaping financial success worldwide.
          </p>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {
            imageCards.map((item,index) => (
                <div 
                key={index}
                onClick={() => handleClick(item)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative cursor-pointer overflow-hidden transition-all duration-300"
                style={{ cursor: "pointer", position: "relative", zIndex: 10 }}
                >
                    <img src={item.src} alt={item.name} className="h-[25rem] w-[25rem] object-cover"/>
                    <div className={`absolute inset-0 bg-[var(--secondary-light)] flex flex-col items-center justify-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="">
                        <p className='text-[var(--text-white)] font-bold text-xl text-center'>{item.name}</p>
                        <p className='text-[var(--text-white)] text-center'>{item.title}</p>
                        </div>
                        <p className="flex items-center gap-2 text-2xl">
                            {item.media}
                            {item.face}
                            {item.youtube}
                        </p>
                    </div>
                </div>
            ))
        }
    </div>
        </div>
    </section>
  )
}

export default Leader