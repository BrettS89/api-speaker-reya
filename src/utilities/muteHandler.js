const localSockets = require('../localSockets');

module.exports = _id => {
  const session = localSockets.active[_id];
  session.muted = !session.muted;
  global.io.to(session.socket_id).emit('MUTE', { mute: true });
};
