// ################## ES6 ################################
// To use the ES6 codes commented below, uncomment them, then comment the ES5 codes, 
// then add  { type": "module" } in package.json file after description or main tag
// Had to make use of ES5 because the ES6 codes were not rendering well on Azure App Service.
// import createError from 'http-errors';
// import express from 'express';
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';
// import cors from 'cors';

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();
// app.use(cors());

// app.set('views', (__dirname, 'views'));
// app.set('view engine', 'pug');

// app.set('port', process.env.PORT || 5000);
// console.log("+++++++++++++++" + app.get('port'));

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use(express.static('./client/build'));

// import data from './routes/new-index.js';
// app.use('/api/data', data);

// app.get("*", (req, res) => { //our GET route needs to point to the index.html in our build
//     res.sendFile(dirname.resolve(__dirname, "client", "build", "index.html"));
//   });

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     res.status(err.status || 500);
//     res.render('error');
// });

// app.listen(app.get('port'), () => {
//     console.log('Express server listening on port ' + app.get('port'));
// });

// export default app;



// #################### ES5 #####################################

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const app = express();
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.set('port', process.env.PORT || 5000);
console.log("+++++++++++++++" + app.get('port'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('./client/build'));

app.use('/api/data', require('./routes/new-index.js'))

app.get("*", (req, res) => { //our GET route needs to point to the index.html in our build
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

