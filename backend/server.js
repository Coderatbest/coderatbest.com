const express = require('express');
const { json, urlencoded } = require('body-parser');
const router = require('./app/Routers');

var app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
router(app);

//app.use('/static',express.static('public'));
app.listen(3000);

console.clear();
console.log('this app listen to http://localhost:3000');