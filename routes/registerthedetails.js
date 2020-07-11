var express = require('express');
var router = express.Router();
var fs = require('fs');

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
        console.log("${the.email}");
        if(theemail != "") {
            connection.query("select count(*) as count from usertable where email='"+theemail+"';", function(error, results, fields) {
                if(error) {
                    console.log("Could not check");
                    // res.render('register', {});
                    res.redirect('register');
                }
                else {
                    if(results[0].count > 0) {
                        console.log("User already exists");
                        // res.render('register', {});
                        res.redirect('register');
                    }
                    else {
                        connection.query("Insert Into usertable(email, password) values('"+theemail+"', '"+thepassword+ "');", function(error, results, fields) {
                            if(error) {
                                console.log("Could not insert Successfully");
                                // res.render('register', {});
                                res.redirect('register');
                                // throw error;
                            }
                            else {
                                rsuccess = true;
                                console.log("Inserted successfully");
                                var dir = './users/' + theemail;
                                fs.mkdir(dir, function(error) {
                                    if(error) {
                                        console.log("Could not create directory");
                                        // res.render('register', {});
                                        res.redirect('register');
                                        // res.render('login', {success: success, rsuccess: rsuccess});
                                    }
                                    else {
                                        console.log("Created user directory");
                                        res.redirect('login');
                                    }
                                });
                                // res.render('register', {});
                                // res.redirect('register');
                            }
                            // res.render('login', {success: success, rsuccess: rsuccess});
                        });
                    }
                }
            });
            
        }
        else {
            // res.render('register', {});
            res.redirect('register');
            // res.render('login', {success: success, rsuccess: false});
        }
    }
    else {
        // res.render('register', {});
        res.redirect('register');
        // res.render('login', {success: success, rsuccess: false});
    }
});

module.exports = router;
