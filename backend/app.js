const express = require('express');
const mongoose = require('mongoose');
const users = require('./src/route/users')
const dotenv = require('dotenv')

const deposit = require('./src/route/deposit')
const withdraw = require('./src/route/withdraw')

dotenv.config(); 

const app = express();
app.use(express.json()); // Middleware to parse JSON



// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  serverSelectionTimeoutMS: 10000,
}).then(
  () => {
    console.log('✅ MongoDB connected');
  })
  .catch(err => console.error("MongoDB connection error:", err));



// Test Route
app.get('/', (req, res, next) => {
  res.send('Hello World!');
  next()
});


//import route
app.use('/api/users', users )
app.use('/api/deposit', deposit)
app.use('/api/withdraw', withdraw)

module.exports = app;
