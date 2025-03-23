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
    <div  className="max-w-5xl" >
        {/* header */}
        <div>
            <p className="text-[var(--gray-color)] text-xl ">welcome,</p>
            <h2 className="font-bold text-4xl">Victor</h2>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4 mt-10 ">
            <div className="w-[15rem] h-[13rem] border-b-4 border-[var(--primary-color)] bg-[var(--secondary-color)]  rounded-lg p-8">
                <div className="">
                <p className="bg-[var(--text-white)] p-2 rounded-full flex justify-center items-center w-[2.5rem] h-[2.5rem] ">
                    <FaWallet size={22}/>
                    </p>

                    
                    <div className="mt-12">
                    <p className="text-[var(--text-white)]">Total Deposit</p>
                    <h2 className="text-[var(--text-white)] font-bold text-2xl">$3000.00</h2>
                    </div>
                </div>
            </div>

            <div className="w-[15rem] h-[13rem] border-b-4 border-[var(--primary-color)] bg-[var(--card-color)]  rounded-lg p-8">
            <div className="">
                    <p className="bg-[var(--secondary-color)] text-[var(--text-white)] p-2 rounded-full flex justify-center items-center w-[2.5rem] h-[2.5rem] ">
                    <GrTransaction size={22}/>
                    </p>

                    
                    <div className="mt-12">
                    <p className="text-[var(--text-black)]">Active Deposit</p>
                    <h2 className="text-[var(--text-black)] font-bold text-2xl">$2000.00</h2>
                    </div>
                </div>
            </div>

            <div className="w-[15rem] h-[13rem] border-b-4 border-[var(--primary-color)] bg-[var(--card-color)]  rounded-lg p-8">
            <div className="">
            <p className="bg-[var(--secondary-color)] text-[var(--text-white)] p-2 rounded-full flex justify-center items-center w-[2.5rem] h-[2.5rem] ">
                    <FaChartSimple  size={22}/>
                    </p>

                    
                    <div className="mt-12">
                    <p className="text-[var(--text-black)]">Profit</p>
                    <h2 className="text-[var(--text-black)] font-bold text-2xl">$3000.00</h2>
                    </div>
                </div>
            </div>

            <div className="w-[15rem] h-[13rem] border-b-4 border-[var(--primary-color)] bg-[var(--card-color)]  rounded-lg p-8">
            <div className="">
            <p className="bg-[var(--secondary-color)] text-[var(--text-white)] p-2 rounded-full flex justify-center items-center w-[2.5rem] h-[2.5rem] ">
                    <FaCoins  size={22}/>
                    </p>

                    
                    <div className="mt-12">
                    <p className="text-[var(--text-black)]">Referrals</p>
                    <h2 className="text-[var(--text-black)] font-bold text-3xl">$2000.00</h2>
                    </div>
                </div>
            </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-4 mt-4 mb-10">

            <div className="w-full h-[10rem] bg-[var(--card-color)] rounded-lg p-4 md:col-span-3">
                <h2 className="font-bold text-lg pb-2">Quick Action</h2>
                <div className="grid justify-center  items-center  gap-2">
                    <button 
                    onClick={() => navigate('/deposit')}
                    className="bg-[var(--secondary-color)] text-[var(--text-white)] px-2 py-2 rounded-md w-[15rem]">Deposit
                    </button>
                    
                    <button 
                    onClick={() => navigate('/withdraw')}
                    className="bg-[var(--text-black)] text-[var(--text-white)] px-4 py-2 rounded-md w-[15rem]">Withdraw
                    </button>
                </div>
            </div>

            <div className="w-full h-[10rem] bg-[var(--card-color)] rounded-lg p-4 md:col-span-7 bg-[]">
                <div className=" grid justify-start ">
                    <p className="text-[var(--text-black)]  text-xl font-bold">Refer Us & Earn</p>
                    <h2 className="text-[var(--gray-color)] text-md ">Use the bellow link to invite your friends.</h2>
                </div>

                <div className="flex items-center  border  rounded-lg mt-6  w-full ">
      <input
        type="text"
        value={referralLink}
        readOnly
        className="w-full px-2 bg-transprent border-none outline-none text-gray-700"
      />
      <button
        onClick={copyToClipboard}
        className="p-2 text-gray-500 hover:text-gray-700"
      >
        <FaRegCopy size={20} />
      </button>
      {copied && <span className="text-green-500 text-sm">Copied!</span>}
    </div>
            </div>

        </div>
    </div>
  )
}

export default TopDash