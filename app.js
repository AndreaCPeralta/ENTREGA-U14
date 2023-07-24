const express = require ('express');
const app = express();
const path = require ('path');
const morgan = require ('morgan');
const index = require('./rut/index')

app.set('port', 5000);
app.set('v', path.join(__dirname, 'v'))
app.set('v engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(require('./rut/index'));

app.use(express.static(path.join(__dirname, 'p')));

app.use((req, res, next) => {
    res.status(404).send('404 Not found');
})

module.exports = app;