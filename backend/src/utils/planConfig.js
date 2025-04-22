const planConfig = {
    Emergency: { min: 10, max: 50000, duration: 30, profitPercent: 0.4 },
    Standard: { min: 100, max: 5000, duration: 60, profitPercent: 0.6 },
    Prime: { min: 5001, max: 50000, duration: 90, profitPercent: 0.8 },
    Shareholder: { min: 50000, max: 500000, duration: 180, profitPercent: 1.2 },
  };

  module.exports = {planConfig }