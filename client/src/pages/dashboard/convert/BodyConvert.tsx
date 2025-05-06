// components/BodyConvert.tsx
import { useState, useEffect } from "react";
import { TbArrowsExchange } from "react-icons/tb";


// Union of all currencies
type Currency = 'USD' | 'NGN' | 'EUR' | 'GBP';

// Define mockRates with optional inner currency keys
const mockRates: Record<Currency, Partial<Record<Currency, number>>> = {
  USD: { NGN: 1500, EUR: 0.9, GBP: 0.8 },
  NGN: { USD: 0.00067, EUR: 0.0006, GBP: 0.00053 },
  EUR: { USD: 1.1, NGN: 1667, GBP: 0.88 },
  GBP: { USD: 1.25, NGN: 1900, EUR: 1.14 },
};


const BodyConvert = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('NGN');
  const [toCurrency, setToCurrency] = useState('NGN');
  const [convertedAmount, setConvertedAmount] = useState('');
  
  useEffect(() => {
    if (!amount || isNaN(Number(amount))) {
      setConvertedAmount('');
      return;
    }

    const rate = mockRates[fromCurrency as Currency]?.[toCurrency as Currency];
    if (!rate) {
      setConvertedAmount('');
      return;
    }

    const result = (parseFloat(amount) * rate).toFixed(2);
    setConvertedAmount(result);
  }, [amount, fromCurrency, toCurrency]);

  

  return (
    <div className="p-4">

      <div className="grid items-center  space-y-6 p-8 justify-center">
      <div className=" bg-[var(--card-color)] rounded-md p-8">
      <label className="block mb-1 font-medium">from </label>
      <div className="flex gap-4 ">
      <div>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="USD">USD</option>
            <option value="NGN">NGN</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>
      </div>
       
      </div>

      <div className="flex justify-center my-2">
        <TbArrowsExchange size={24} />
      </div>

      <div className=" bg-[var(--card-color)] rounded-md p-8">
      <label className="block mb-1 font-medium">to </label>
      <div className="flex gap-4 ">
        <div>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="USD">USD</option>
            <option value="NGN">NGN</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            value={convertedAmount}
            readOnly
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>
      </div>
      </div>
      

      <button className="bg-[var(--primary-color)] p-2 text-[var(--text-white)]"> Convert </button>
      </div>
     
     
    </div>
  );
};

export default BodyConvert;
