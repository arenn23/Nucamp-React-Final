const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  agree: {
    type: Boolean,
    default: false,
    required: false,
  },
  contactType: {
    type: String,
    default: "By Phone",
    required: false,
  },
  feedback: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
