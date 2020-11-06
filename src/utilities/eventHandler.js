const localSockets = require('../localSockets');

module.exports = message => {
  const obj = JSON.parse(message);
  console.log(obj);
  console.log(localSockets);

  obj._ids.forEach(_id => {
    const session = localSockets.active[_id];
    
    if (session && (session.app_ids[obj.app_id] || obj.subscribed)) {
      global.io.to(session.socket_id).emit('PLAY_AUDIO', { audio: obj.audio});
      if (obj.subscribed) {
        session.app_ids[obj.app_id] = true;
      }
    }
  });
};
