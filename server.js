const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

require('dotenv').config();
const app = express();
require('./config/database');

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(port, () => { 
    console.log('Express is listening');
});