require('./models/db');
const express = require('express');
const path = require('path');
var app = express();
var bodyParser = require('body-parser')

const handler = require('express-handlebars'); 
const usercontroller = require('./controller/usercontroller');
const signup = require('./controller/signup');

const port = process.env.port || 3000;
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', handler({extname:'hbs',defaultLayout:'mainlayout', layoutDir: __dirname + '/views/'}));
app.set('view engine', 'hbs')
app.listen(port, ()=> {
    console.log('express server at port 3000');
});

app.use(bodyParser.urlencoded({ 
    extended : true
}));
app.use(bodyParser.json());
app.use('/login', usercontroller);
// app.use('/signup', signup);