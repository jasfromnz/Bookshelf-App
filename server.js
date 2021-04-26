const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;

const app = express();
require('dotenv').config();
require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const readersRouter = require('./routes/readers');
const shelvesRouter = require('./routes/shelves');

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true, // must be true to use Passport
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/shelves', isLoggedIn, readersRouter);
app.use('/shelves', isLoggedIn, shelvesRouter);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  };

app.listen(port, () => { 
    console.log('Express is listening');
});