const REST_API_ENDPOINT = '/rest'

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

let app = express();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const fileUploadLib = require("express-fileupload");
const cors = require('cors')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.json({limit: '512mb'}));
app.use(express.urlencoded({limit: '512mb', extended: false}));

//app.use(cors())
app.use(cors({
  //origin: 'http://localhost:8080',
  //credentials: true,
  exposedHeaders: ['Content-Disposition']
}))
app.use(fileUploadLib());

//app.use(express.json());
//pp.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'build')))

app.use(REST_API_ENDPOINT, indexRouter);
app.use(REST_API_ENDPOINT + '/users', usersRouter);

// listen to port 3001
const port = process.env.PORT || 3001;

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


app.listen(port, () => {
  console.log('server listening on: ' + port);

  //precacheDataExport(app).then(r => console.log("pre-caching done"));
});


/*
app.listen(port, async () => {
    //console.log('async server listening on port 3001..');
    //let a = await getUserByCaretakerId('3d9387a3-bc8f-45d6-a96a-3f2415cb0d2a')
     //   console.log(a['rows'][0])

    //let n = await updateNotificationResponse('9cf9f85d-10db-428c-b42d-4225af6897db', 'Cenik avtomatsko potrjen po 24h.', NOTIFICATION_STATUS.CONFIRMED);
    //console.log(n['rows'][0])



});
*/

