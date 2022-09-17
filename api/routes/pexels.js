var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Pexels API returns content');
});

module.exports = router;
