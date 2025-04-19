const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  flatNumber: { type: String, required: true, unique: true },
  ownerName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
