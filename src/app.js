const path = require('path');
const express = require('express');
const app = express();
const v1 = require('./routes/v1');
const notFound = require('./services/not-found');


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.use('/api/v1', v1);
app.use(notFound);

app.get('/*', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;
