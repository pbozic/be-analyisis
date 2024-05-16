const { Server } = require('socket.io');
const {server} = require('./server');
const UserSockets = new Map(); // Store user ID to socket mapping
const jwt = require("jsonwebtoken");

const io = new Server(server);

io.use((socket, next) => {
    let token = socket.handshake.auth.token || (socket.handshake.headers['authorization'] && socket.handshake.headers['authorization'].split(" ")[1]);
    console.log("socket token: ", token);
    if (!token) return next(new Error('Authentication error'));
    jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
        if (err) return next(new Error('Authentication error'));
        socket.user = user;
        UserSockets.set(user.user_id, socket);
        next();
    });
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('test_rec', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        UserSockets.delete(socket.user.user_id);
        console.log('user disconnected');
    });
});


module.exports = {
    io,
    UserSockets
};