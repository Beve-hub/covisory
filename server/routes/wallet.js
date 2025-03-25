const express = require('express');
const router = express.Router();

/* get all the transacrtion mand */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* get all the transacrtion mand */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
