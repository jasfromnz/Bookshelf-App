const express = require('express');
const morgan = require('morgan');
require("./config/database");
const app = express();

// require routers

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(urlencoded({ extended: false }));

// set routes

app.listen('3000', function() {
    console.log('Express is listening');
});