import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BodyWithdarw = () => {
  const [plan, setPlan] = useState("basic");
      const [amount, setAmount] = useState(0);
      const [wallet, setWallet] = useState("wallet1");
      const navigate = useNavigate()
    
      const handleSubmit = () => {
        navigate('/withdrawSummary')
      };
  
      return (
        <div className="flex items-center justify-center w-screen h-screen p-4 bg-[var(--text-white)] mr-18">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <form 
            onSubmit={handleSubmit} 
           className="w-full space-y-6"
          >
             <div>
              <label className="block text-gray-700">Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full p-2 border rounded-lg"
                min={0}
              />
            </div>

            <div>
              <label className="block text-gray-700">Choose a Plan:</label>
              <select
                value={plan}
                className="w-full p-2 border rounded-lg"
                onChange={(e) => setPlan(e.target.value)}
              >
                <option value="wallet1">Standard</option>
                <option value="wallet2">Institutional</option>
                <option value="wallet3">Prime</option>
                <option value="wallet3">Shareholder</option>
              </select>
             
            </div>

            <div>
              <label className="block text-gray-700">Select Wallet:</label>
              <select
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="wallet1">BTC</option>
                <option value="wallet2">ETH</option>
                <option value="wallet3">USDT</option>
              </select>
            </div>
  
            <div>
              <label className="block text-gray-700">Select Network:</label>
              <select
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="wallet1">Bitcoin</option>
                <option value="wallet2">TRC20</option>
                <option value="wallet3">ERC30</option>
              </select>
            </div>
    
            <button 
              type="submit" 
              className="w-full text-white p-2 rounded-lg bg-[var(--secondary-color)]"
            >
              Submit
            </button>
          </form>
          </div>
        </div>
      );
}

export default BodyWithdarw