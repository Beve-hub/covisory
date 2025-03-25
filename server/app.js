const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();


const app = express();


const depositRoute = require('./routes/deposit');
const withdrawalRoute = require('./routes/withdrawal');
const walletRoute = require('./routes/wallet');
const userRoute = require('./routes/users')




app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/user', userRoute);
app.use('/api/deposit',depositRoute);
app.use('/api/withdrawal',withdrawalRoute);
app.use('/api/wallet',walletRoute);



app.use('/',(req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});



module.exports = app;




