const express = require('express');
const api = express.Router();
const accessRouter = require('./login/login.route');

api.use('/', accessRouter);

module.exports = api;