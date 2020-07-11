var express = require('express');
const session = require('express-session');
var router = express.Router();
fs = require('fs');

var theemail;// = 'F1';
var dir = './users/';
var itemlist = [];
var filecount = 0;
var foldercount = 0;

var Item = function(name, path, type) {
    this.name = name;
    this.path = path;
    this.type = type;
}

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(!req.session.loggedemail) {
        res.render('login', {success: false, rsuccess: true});
    }
    try {
        dir = './users/';
        theemail = req.session.loggedemail;
        dir = dir + theemail + req.session.currentdir.join('/');
        console.log("Changed to: " +dir);
        itemlist = [];
        filecount = 0;
        foldercount = 0;
        var files = fs.readdirSync(dir);
        files.forEach(function(file) {
            console.log(file);
            var abspath = dir+'/'+file;
            console.log(abspath);
            if(fs.statSync(abspath).isDirectory()) {
                // folderlist.push(file);
                itemlist.push(new Item(name=file, path=dir, type='folder'));
                foldercount++;
                console.log("A folder");
            }
            else {
                itemlist.push(new Item(name=file, path=dir, type='file'));
                filecount++;
                console.log("A file");
            }
        });
    }
    catch(err) {

    }
    theemail = req.session.loggedemail;
    res.render('userpage', {success: true, rsuccess: true, user: theemail, filecount: filecount, foldercount: foldercount, itemlist: itemlist});
    // res.redirect('userpage');
});

module.exports = router;
