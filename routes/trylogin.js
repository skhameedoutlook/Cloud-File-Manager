var express = require('express');
var router = express.Router();

var rsuccess = false;
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
        console.log("Could not connect");
    }
    else {
        success = true;
        console.log("Connected successfully");
    }
});

// connection.query("SELECT count(*) from usertable", function(error, results, fields) {
//     if(error) {
//         console.log("Could not query Successfully");
//         // throw error;
//     }
//     else {
//         console.log("Queried successfully");
//     }
// });

/* GET home page. */
router.post('/', function(req, res, next) {
    if(req.body) {
        var theemail = req.body.email;
        var thepassword = req.body.password;
        console.log("${theemail}");
        if(theemail != "") {
            connection.query("select password from usertable where email='"+theemail+"';", function(error, results, fields) {
                if(error) {
                    console.log("Could not find user");
                    // throw error;
                }
                else {
                    rsuccess = true;
                    console.log("Found user");
                    if(results.length == 0) {
                        res.render('login', {success: false, rsuccess: true});
                    }
                    else {
                        if(results[0].password == thepassword) {
                            req.session.loggedemail = theemail;
                            res.redirect('/userpage');
                            // res.render('userpage', {success: true, rsuccess: true, user: theemail, filecount: 0, foldercount: 0, itemlist: []});
                        }
                        else {
                            res.render('login', {success: false, rsuccess: true});
                        }
                    }
                    res.render('login', {success: false, rsuccess: true});
                }
                res.render('login', {success: false, rsuccess: true});
            });
        }
        else {
            res.render('login', {success: false, rsuccess: true});
        }
    }
    else {
        res.render('login', {success: false, rsuccess: true});
    }
    
});

module.exports = router;
