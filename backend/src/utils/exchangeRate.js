// Get current exchange rates (you would replace this with a real API)
const getExchangeRate = async (fromCurrency, toCurrency) => {
    // In a real app, you would call an exchange rate API here
    const rates = {
      NGN: { USD: 0.0024, GBP: 0.0018, EUR: 0.0021 },
      USD: { NGN: 1613.5, GBP: 0.73, EUR: 0.85 },
      GBP: { NGN: 566.2, USD: 1.37, EUR: 1.16 },
      EUR: { NGN: 487.3, USD: 1.18, GBP: 0.86 }
    };
    
    return rates[fromCurrency]?.[toCurrency] || 1;
  };


  module.exports = {getExchangeRate};