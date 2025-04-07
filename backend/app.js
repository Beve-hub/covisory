const express = require('express');
const mongoose = require('mongoose');
const users = require('./src/route/users')
const dotenv = require('dotenv')

dotenv.config(); 

const app = express();
app.use(express.json()); // Middleware to parse JSON



// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  tlsAllowInvalidCertificates: false,
  serverSelectionTimeoutMS: 10000,
})


// Test Route
app.get('/', (req, res, next) => {
  res.send('Hello World!');
  next()
});


//import route
app.use('/api/users', users )

module.exports = app;
