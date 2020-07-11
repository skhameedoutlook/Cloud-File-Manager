var express = require('express');
var router = express.Router();
var theemail = "F1";

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("<->"+req.params.downfile);
    // res.download('./demo.pdf');
    res.render('userpage', {success: true, rsuccess: true, user: theemail, filecount: 0, foldercount: 0, itemlist: []});
});

module.exports = router;


