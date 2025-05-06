import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Plan {
    min: number;
    max: number;
    interest: string;
  }
  
  const plans: Record<string, Plan> = {
    standard: { min: 100, max: 5000, interest: "2%" },
    institutional: { min: 5001, max: 10000, interest: "4.5%" },
    prime: { min: 10001, max: 200000, interest: "7.5%" },
    shareholder: { min: 200001, max: 50000, interest: "11%" },
  };



const BodyDeposit = () => {
    const [plan, setPlan] = useState("standard");
    const [amount, setAmount] = useState(0);
    const [wallet, setWallet] = useState("wallet1");
    const navigate = useNavigate()
  
    const handleSubmit = () => {
      navigate('/depositSummary')
    };

    const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement> ) => {
        setPlan(e.target.value);
        setAmount(plans[e.target.value].min); // Set minimum amount when plan changes
      };
  
    return (
      <div className="flex items-center justify-center w-screen h-screen p-4 bg-[var(--text-white)] mr-18">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <form 
          onSubmit={handleSubmit} 
         className="w-full space-y-6"
        >
          <div>
            <label className="block text-gray-700">Choose a Plan:</label>
            <select
              value={plan}
              onChange={handlePlanChange}
              className="w-full p-2 border rounded-lg"
            >
              {Object.keys(plans).map((key) => (
                <option key={key} value={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </option>
              ))}
            </select>
            <p className="text-gray-500 text-sm flex items-center justify-between">
              <span>${plans[plan].min} - ${plans[plan].max}</span> <span>{plans[plan].interest}</span>
            </p>
          </div>
  
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
            <label className="block text-gray-700">Select Wallet:</label>
            <select
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="wallet1">NGN</option>
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
};

export default BodyDeposit;
