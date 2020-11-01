const Speaker = require('../models/speaker');
const AppSub = require('../models/AppSub');
const Session = require('../models/Session');
const lookupTable = require('./lookupTable');
const localSockets = require('../localSockets');

module.exports = async (socketId, speakerId) => {
  try {
    const speaker = await Speaker.findById(speakerId);

    if (!speaker && !speaker.user_id) throw new Error('could not connect');

    const appSubs = await AppSub.find({ user_id: speaker.user_id });
    const appSubTable = lookupTable(appSubs);

    const session = new Session({
      user_id: speaker.user_id,
      socket_id: socketId,
      app_ids: appSubTable,
    });

    await session.save();
    
    localSockets.active[speaker.user_id] = session;
    localSockets.socketToIdMap[socketId] = speaker.user_id;
  } catch(e) {
    console.log('Socket connect error', e);
  }
};
