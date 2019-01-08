const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const apiPath = '/api/v1';
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(apiPath, router)
app.use(apiPath + '/products', products);
app.use(apiPath + '/categories', categoriesRouter);
app.use(apiPath + '/brands', brandsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404, 'No HTTP resource was found that matches the request URI'));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = process.env.ENVIRONMENT === 'development' ? err.stack : err.message;

    res.status(err.status || 500).json({errorCode: err.status, error: err.name, details: res.locals.error});
});

module.exports = app;
