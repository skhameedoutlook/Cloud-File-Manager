var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.loggedemail = null;
  res.redirect('/login');
});

module.exports = router;
