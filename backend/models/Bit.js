const mongoose = require("mongoose");

// create Bit Schema
const BitSchema = new mongoose.Schema({
  bit: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  tone: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  tags: {
    type: Array
  }
});

module.exports = Bit = mongoose.model('bit', BitSchema);
