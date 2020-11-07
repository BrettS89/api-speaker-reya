const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  muted: {
    type: Boolean,
    default: false,
  },
  processed: {
    type: Boolean,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Speaker', schema);
