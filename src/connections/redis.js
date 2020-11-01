const redis = require('redis');
const eventHandler = require('../utilities/eventHandler');

// if (process.env.LOCAL !== 'true') {
//   var subscriber = redis.createClient({
//     host: process.env.REDIS_HOST,
//     port: process.env.REDIS_PORT,   
//     password: process.env.REDIS_PASSWORD,           
//   });
// } else {
  const subscriber = redis.createClient({
    url: process.env.REDIS_URL,
    password: process.env.REDIS_PASSWORD,        
  });
// }

subscriber.on("subscribe", function(channel, count) {
  console.log(`subscribed to`, channel);
});

subscriber.on('message', (channel, message) => {
  console.log('inn');
  eventHandler(message);
});

subscriber.subscribe('event')

module.exports = subscriber;
