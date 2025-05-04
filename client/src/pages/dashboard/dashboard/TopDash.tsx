import { useState } from "react";
import { FaRegCopy, FaWallet,FaCoins  } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { useNavigate } from "react-router-dom";



const TopDash = () => {
  const navigate = useNavigate();
    const [copied, setCopied] = useState(false);
  const referralLink = "https://www.covisoryholdingsfx.com/register/victor";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div  className="max-w-6xl" >
        {/* header */}
        <div>
            <p className="text-[var(--gray-color)] text-xl ">Hi welcome,</p>
            <h2 className="font-bold text-3xl">Victor Smith</h2>
        </div>

        {/* cards */}

        <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-4 mt-4 mb-10">

            <div className="w-full bg-[var(--card-color)] rounded-lg p-8 md:col-span-4">
                

                <div className="pb-6">
                <p className="font-bold text-md text-[var(--gray-color)] ">Portfolio</p>
                <h2 className="font-bold text-3xl ">$6000</h2>
                </div>
                <div className="flex justify-start  items-center  gap-2">
                    <button 
                    onClick={() => navigate('/deposit')}
                    className="bg-[var(--secondary-color)] text-[var(--text-white)] px-2 py-2 rounded-md w-[7rem]">Deposit
                    </button>
                    
                    <button 
                    onClick={() => navigate('/withdraw')}
                    className="bg-[var(--text-black)] text-[var(--text-white)] px-4 py-2 rounded-md w-[7rem]">Withdraw
                    </button>
                </div>
            </div>

            <div className="w-full bg-[var(--primary-color)] rounded-lg p-8 md:col-span-6 bg-[]">
                <div className=" grid justify-start pb-2">
                    <p className="text-[var(--text-white)]  text-xl font-bold">Refer Us & Earn</p>
                    <h2 className="text-[var(--text-white)] text-md ">Use the bellow link to invite your friends.</h2>
                </div>

                <div className="flex items-center  border border-[var(--text-white)]  rounded-lg mt-6  w-full ">
      <input
        type="text"
        value={referralLink}
        readOnly
        className="w-full px-2 bg-transprent border-none outline-none text-[var(--text-white)]"
      />
      <button
        onClick={copyToClipboard}
        className="p-2 text-[var(--text-white)] hover:text-gray-700"
      >
        <FaRegCopy size={20} />
      </button>
      {copied && <span className="text-[var(--text-white)] text-sm">Copied!</span>}
    </div>
            </div>

        </div>
    </div>
  )
}

export default TopDash