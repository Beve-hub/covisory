const { Router } = require('express');
const router = Router();
const verifyToken = require('./verifyToken')
const Wallet = require('../model/Wallet')


router.get('/balance', verifyToken, async(req, res) => {
    try {
        const wallet = await Wallet.findOne({ userId: req.user._id });
    
        if (!wallet) {
          return res.status(404).json({ error: 'Wallet not found' });
        }
    
        res.json({
          balanceNGN: wallet.balanceNGN,
          balanceUSD: wallet.balanceUSD,
          balanceEUR: wallet.balanceEUR,
          balanceGBP: wallet.balanceGBP,
          updatedAt: wallet.updatedAt
        });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
})

module.exports = router