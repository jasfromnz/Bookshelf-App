const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;

require('dotenv').config();
const app = express();
require('./config/database');

const indexRouter = require('./routes/index');
const shelvesRouter = require('./routes/shelves');
const statusRouter = require('./routes/status');

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/shelves', shelvesRouter);
app.use('/shelves', statusRouter);

app.listen(port, () => { 
    console.log('Express is listening');
});