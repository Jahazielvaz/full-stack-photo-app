const express = require('express');
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false});
const morgan = require('morgan');
const multer = require('multer');
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const path = require('path');

require('./server/config/local-strategy.js')(passport);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(cookieParser());
app.use(urlEncoded);
app.use(session({ secret: 'jasonisourlovechildforthisapp', cookie: { maxAge: 1200000 } }))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'statics')));
app.use(flash());

const userRoutes = require('./server/routes/user-route.js')(app,passport);
const imageRoutes = require('./server/routes/image-upload.js')(app);
const commentsRoute = require('./server/routes/comments.js')(app);











module.exports = app;
