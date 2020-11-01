const onSocketConnect = require('./utilities/onSocketConnect');
const onSocketDisconnect = require('./utilities/onSocketDisconnect');

module.exports = listenForConnection = io => {
  io.on('connection', async (socket) => {
    console.log('made socket connection');
    const _id = socket.handshake.query._id;
    onSocketConnect(socket.id, _id);

    socket.on('disconnect', () => {
      onSocketDisconnect(socket.id);
      socket.disconnect();
      console.log('a socket was disconnected');
    });
  });
};
