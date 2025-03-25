var express = require('express');
var router = express.Router();

/* GET users register. */
router.post('/register', (req, res) => {
  res.send('Register');
});

/* GET users login. */
router.post('/login', (req, res ) => {
  res.send('respond with a resource');
});

module.exports = router;
