// Get current exchange rates (you would replace this with a real API)
const getExchangeRate = async (fromCurrency, toCurrency) => {
    // In a real app, you would call an exchange rate API here
    const rates = {
      USD: { NGN: 1500, EUR: 0.9, GBP: 0.8 },
      NGN: { USD: 0.00067, EUR: 0.0006, GBP: 0.00053 },
      EUR: { USD: 1.1, NGN: 1667, GBP: 0.88 },
      GBP: { USD: 1.25, NGN: 1900, EUR: 1.14 },
    };
    
    return rates[fromCurrency]?.[toCurrency] || 1;
  };


  module.exports = {getExchangeRate};