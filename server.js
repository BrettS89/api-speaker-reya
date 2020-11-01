const socket = require('socket.io');
const app = require('./src');
const listener = require('./src/socket');

const server = app.listen(process.env.PORT);
const io = socket(server);

listener(io);

global.io = io;
