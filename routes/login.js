var express = require('express');
var router = express.Router();

/* GET home page. */

var success = false;

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "musicusers"
});

connection.connect(function(error) {
    if(error) {
        success = false;
        console.log("Could not connect");
    }
    else {
        success = true;
        console.log("Connected successfully");
    }
});

connection.query("SELECT * from usertable", function(error, results, fields) {
    if(error) {
        console.log("Could not query Successfully");
        // throw error;
    }
    else {
        console.log("Queried successfully");
        console.log(results);
    }
});

router.get('/', function(req, res, next) {
  res.render('login', {success: success, rsuccess: true});
});

connection.end();

module.exports = router;
