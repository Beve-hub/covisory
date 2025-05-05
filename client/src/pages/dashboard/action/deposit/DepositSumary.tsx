import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const DepositSumary = () => {
    const navigate = useNavigate()
  
    const handleSubmit = () => {
      navigate('/depositCheckout')
    };

  return (
    <div className="flex items-center justify-center w-screen h-screen p-4 bg-[var(--text-white)] mr-2">
        <div className="absolute top-20 left-10 lg:left-[12rem]">
                     <div className="border p-2 rounded-full"
                     onClick={()=> navigate('/investDashboard')}>
                     <MdArrowBack size={24}/>
                     </div>
                     
                     </div>
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
        onClick={handleSubmit} 
        className="bg-[var(--secondary-color)] text-[var(--text-white)] w-full py-2 rounded-lg">Proceed</button>
        </div>
      </div>
  )
}

export default DepositSumary