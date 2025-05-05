import { FaRegCopy } from "react-icons/fa";
import { useState } from "react";
import gif from "../../../../assets/7efs.gif"
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const DepositCheckout = () => {
  const walletAddress = "VSKDJH79809DJFKFDKLC";
  const network = "TRC20";
  const [copied, setCopied] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 600);
  };

  const handleProceed = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 1200); // 2 minutes
  };

  const handleHome = () => {
    navigate('/deposit')
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen p-4 bg-[var(--text-white)]">
      <div className="absolute top-20 left-10 lg:left-[12rem]">
             <div className="border p-2 rounded-full"
             onClick={()=> navigate('/investDashboard')}>
             <MdArrowBack size={24}/>
             </div>
             
             </div>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <p className="font-bold text-xl">Proceed To Payment</p>
        <p className="mb-4 text-[var(--gray-color)]">
          You are depositing 399 USD to the following wallet.
          Please follow the instructions below and confirm the wallet before making the payment.
        </p>

        <div className="flex items-center justify-between py-2 ">
          <p>Wallet Address:</p>
          <div className="flex items-center gap-2">
            <p className="font-mono">{walletAddress}</p>
            <FaRegCopy 
              className="cursor-pointer text-gray-500 hover:text-gray-700" 
              onClick={() => handleCopy(walletAddress, 'wallet')} 
            />
          </div>
        </div>

        <div className="flex items-center justify-between py-4 ">
          <p>Network:</p>
          <div className="flex items-center gap-2">
            <p className="font-mono">{network}</p>
            <FaRegCopy 
              className="cursor-pointer text-gray-500 hover:text-gray-700" 
              onClick={() => handleCopy(network, 'network')} 
            />
          </div>
        </div>

        {copied && <p className="text-green-500 text-sm text-center mt-2">Copied {copied}!</p>}

        <button
          className="bg-[var(--secondary-color)] text-white w-full py-2 rounded-lg mt-4 flex items-center justify-center"
          onClick={handleProceed}
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
              Processing...
            </>
          ) : (
            "Proceed"
          )}
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-[var(--gray-color)] bg-opacity-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <img src={gif} alt="successful"/>
            <p className="text-xl font-semibold">Payment Successful</p>
            <button 
              className="bg-[var(--secondary-color)] text-[var(--text-white)] w-full py-2 rounded-lg mt-4"
              onClick={handleHome}
            >
              Go Back
            </button>
          </div>
        </div>
      )}

  
    </div>
  );
};

export default DepositCheckout;
