require('dotenv').config();
const axios = require('axios');

const PAYSTACK_BASE_URL = "https://api.paystack.co";

exports.initializeTransaction = async ({ email, amount }) => {
    const res = await axios.post(
        `${PAYSTACK_BASE_URL}/transaction/initialize`,
        {
            email,
            amount: amount * 100 // Paystack uses kobo
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                "Content-Type": "application/json"
            }
        }
    );

    return res.data;
};
