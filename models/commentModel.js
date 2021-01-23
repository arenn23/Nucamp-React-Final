const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  campsiteId: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 1,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comments", commentSchema);
