const EXPRESS = require('express');
const FS = require('fs');
const HTTP = require('http');
const APP = EXPRESS();
const SERVER = HTTP.createServer(APP);
const EXHBS = require('express-handlebars');
SERVER.listen(8000);
console.log('Holiday cheer found at http://localhost:8000');

APP.engine('handlebars', EXHBS({defaultLayout: 'main'}));
APP.set('view engine', 'handlebars');
APP.use(EXPRESS.static('public'));

APP.get('/', (req, res) => {
  res.render('index');
})

