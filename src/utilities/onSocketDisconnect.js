const Session = require('../models/Session');
const localSockets = require('../localSockets');

module.exports = (socketId) => {
  Session.deleteMany({ socket_id: socketId })
    .then(() => console.log('in'))
    .catch(err => console.log('err', err));
  const user_id = localSockets.socketToIdMap[socketId];
  delete localSockets.socketToIdMap[socketId];
  delete localSockets.active[user_id];
  console.log(localSockets); 
};
