const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const url = `https://api.polygon.io/v1/conversion/${fromCurrency}/${toCurrency}?amount=1&apiKey=${process.env.EXCHANGE_API_KEY}`;
    const { data } = await axios.get(url);

    if (data && data.converted) {
      return data.converted;
    }
    return null;
  } catch (error) {
    console.error('Exchange rate error:', error.message);
    return null;
  }
};

module.exports = { getExchangeRate };
