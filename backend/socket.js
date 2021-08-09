const io = require('socket.io')
const socket = {};

function connect(server) {
    socket.io= io(server)
}
 
module.exports = {
    connect,
    socket
}