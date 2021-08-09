const express = require('express');

const { json, urlencoded } = require('body-parser');
const router = require('./server/Routers');
const connect = require('./server/ConectionDB');
const socket = require('./socket');


const app = express();
const server = require('http').Server(app);
socket.connect(server);
socket.socket.io.on('connection',socket=>{
    console.log('new client conected! ');
    socket.emit('message', 'welcome!!')
})
connect()
app.use(json());
app.use(urlencoded({ extended: false }));
router(app);

app.use('/',express.static('public'));

server.listen(3000,()=>{
    console.clear();
    console.log('this app listen to http://localhost:3000');
});
