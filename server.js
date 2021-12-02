import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());

app.set('views', (__dirname, 'views'));
app.set('view engine', 'pug');

app.set('port', process.env.PORT || 5000);
console.log("+++++++++++++++" + app.get('port'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('./client/build'));

import data from './routes/new-index.js';
app.use('/api/data', data);

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

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});

export default app;
