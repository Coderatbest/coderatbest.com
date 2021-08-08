//const express = require('express');
const User = require('./Controller/UsersController');

const Routers = (server)=>{
    server.use('/Users',User);
}

module.exports = Routers;