const express = require('express');
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false});

const app = express();
const path = require('path');

const routes = require(__dirname, '/server/routes');

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(urlEncoded);

app.use(express.static(path.join(__dirname, 'statics')));


module.exports = app;
