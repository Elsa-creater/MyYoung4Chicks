const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // You can later hash this
  role: { type: String, enum: ['sales_agent', 'youth_farmer', 'brooder_manager'], required: true }
});

module.exports = mongoose.model('User', userSchema);