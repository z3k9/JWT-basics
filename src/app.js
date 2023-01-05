const path = require('path');
const express = require('express');
const app = express();
const notFound = require('./services/not-found');


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(notFound);

module.exports = app;

// app.use('/api/v1', api);