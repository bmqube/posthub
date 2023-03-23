const mongoose = require("mongoose");
const { Schema } = mongoose;

const Notification = new Schema({
  user: {
    type: String,
  },
  causedBy: {
    type: String,
  },
  post: {
    type: String,
  },
  existence: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Notification ", Notification);