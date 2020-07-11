var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fileUpload = require('express-fileupload');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var registerTheDetailsRouter = require('./routes/registerthedetails');
var tryLoginRouter = require('./routes/trylogin');
var userPageRouter = require('./routes/userpage');
var downloadRouter = require('./routes/download');
var cors = require('cors');
var util = require('util');

var app = express();

var port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(fileUpload());
// app.use('/', indexRouter);
app.use('/', loginRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/registerthedetails', registerTheDetailsRouter);
app.use('/trylogin', tryLoginRouter);
app.use('/userpage', userPageRouter);
// app.use('/upload', uploadRouter);
// app.use('/download', downloadRouter);

app.get('/download/:str', function(req, res) {
  // console.log("<->"+decodeURIComponent(req.params.str));
  // console.log("<->"+req.params.str);
  // res.download(decodeURIComponent(req.params.str));
  console.log('downloaded');
  // res.render('userpage', {success: true, rsuccess: true, user: 'F1', filecount: 0, foldercount: 0, itemlist: []});
});

app.get('/deletefile/:str', function(req, res) {
  console.log("<->D:"+decodeURIComponent(req.params.str));
  // console.log("<->"+req.params.str);
  fs.unlink(decodeURIComponent(req.params.str), function(error) {
    if(error) {
      console.log("Could not delete file");
    } 
  });
  console.log('downloaded');
  res.render('userpage', {success: true, rsuccess: true, user: 'F1', filecount: 0, foldercount: 0, itemlist: []});
});

app.get('/deletefolder/:str', function(req, res) {
  console.log("<->DF:"+decodeURIComponent(req.params.str));
  // console.log("<->"+req.params.str);
  // res.download(decodeURIComponent(req.params.str));
  fs.rmdir(decodeURIComponent(req.params.str), function(error) {
    if(error) {
      console.log("Could not delete folder");
    } 
  });
  console.log('downloaded');
  res.render('userpage', {success: true, rsuccess: true, user: 'F1', filecount: 0, foldercount: 0, itemlist: []});
});


app.post('/upload', function(req, res) {
  try {
    console.log("THE FILE IS: " + req.files);
    if(!req.files) {
        console.log("Select a file");
        // res.send({
        //     status: false,
        //     message: 'No file uploaded'
        // });
    }
    else {
        let thefile = req.files.filetoupload;
        console.log('./users/F1/' + thefile.name);
        thefile.mv('./users/F1/' + thefile.name);
        console.log("File uploaded successfully");
        // res.send({
        //     status: true,
        //     message: 'File is uploaded',
        //     data: {
        //         name: thefile.name,
        //         mimetype: thefile.mimetype,
        //         size: thefile.size
        //     }
        // });
    }
  }
  catch(error) {
    console.log("File not uploaded");
  }
  res.render('userpage', {success: true, rsuccess: true, user: 'F1', filecount: 0, foldercount: 0, itemlist: []});
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(port, () => console.log(`File Manager app listening at http://localhost:${port}`))

module.exports = app;
