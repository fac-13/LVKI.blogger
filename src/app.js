const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
require('env2')('./.env');

const controllers = require('./controllers/index');
const helpers = require('./views/helpers/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers
  })
);

app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 3000);
app.use(controllers);

module.exports = app;
