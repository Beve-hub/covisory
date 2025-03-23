import { useNavigate } from "react-router-dom";
import { useState } from "react";
import gif from "../../../../assets/7efs.gif"


const WithdrawSummary = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
  
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
    <div className="flex items-center justify-center w-screen h-screen p-4 bg-[var(--text-white)] mr-2">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
         <p className="font-bold text-xl">Summary</p>
         <p className="mb-4 text-[var(--gray-color)]">
         You have requested to deposit 399 USD, Please proceed to payment</p>
        <div className="flex items-center justify-between py-2">
            <p>Package Plan:</p>
            <p>Advance Plan</p>
        </div>
        <div className="flex items-center justify-between py-2">
            <p>Profit:</p>
            <p>5% Daily</p>
        </div>
        <div className="flex items-center justify-between py-2">
            <p>Principal Return:</p>
            <p>Yes</p>
        </div>
        <div className="flex items-center justify-between py-2">
            <p>Amount:</p>
            <p>$399</p>
        </div>
        <div className="flex items-center justify-between py-2 mb-4">
            <p>Wallet:</p>
            <p>ETH</p>
        </div>

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
      </div>
  )
}

export default WithdrawSummary