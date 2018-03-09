const express = require('express');
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false});
const logger = require('morgan');
const multer = require('multer');

const app = express();
const path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(urlEncoded);
app.use(express.static(path.join(__dirname, 'statics')));

const userRoutes = require('./server/routes/user-route.js')(app);
const commentsRoute = require('./server/routes/comments.js')(app);











module.exports = app;
