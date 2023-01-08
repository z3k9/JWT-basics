const express = require('express');
const accessRouter = express.Router();
const authMiddleware = require('../../middleware/auth');
const { login , dashboard } = require('./login.controller');

accessRouter.route('/dashboard').get(authMiddleware, dashboard);

accessRouter.route('/login').post(login);

module.exports = accessRouter;
