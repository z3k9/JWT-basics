const express = require('express');
const accessRouter = express.Router();
const { login , dashboard } = require('./login.controller');

accessRouter.route('/dashboard').get(dashboard);

accessRouter.route('/login').post(login);

module.exports = accessRouter;
