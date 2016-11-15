'use strict';

var createError = require('http-errors');

module.exports = (req, res, next) => {
    if (!req.query.url) return next(createError(400, 'requred url'));
    next();
}